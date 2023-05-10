# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createMediaProcessor](#createmediaprocessor)
* [createPlayerStreamer](#createplayerstreamer)
* [createPlayerStreamerPlaybackGrant](#createplayerstreamerplaybackgrant)
* [deleteMediaRecording](#deletemediarecording) - Deletes a MediaRecording resource identified by a SID.
* [fetchMediaProcessor](#fetchmediaprocessor) - Returns a single MediaProcessor resource identified by a SID.
* [fetchMediaRecording](#fetchmediarecording) - Returns a single MediaRecording resource identified by a SID.
* [fetchPlayerStreamer](#fetchplayerstreamer) - Returns a single PlayerStreamer resource identified by a SID.
* [fetchPlayerStreamerPlaybackGrant](#fetchplayerstreamerplaybackgrant) - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
* [listMediaProcessor](#listmediaprocessor) - Returns a list of MediaProcessors.
* [listMediaRecording](#listmediarecording) - Returns a list of MediaRecordings.
* [listPlayerStreamer](#listplayerstreamer) - Returns a list of PlayerStreamers.
* [updateMediaProcessor](#updatemediaprocessor) - Updates a MediaProcessor resource identified by a SID.
* [updatePlayerStreamer](#updateplayerstreamer) - Updates a PlayerStreamer resource identified by a SID.

## createMediaProcessor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaProcessorCreateMediaProcessorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaProcessorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMediaProcessorCreateMediaProcessorRequest();
    $request->extension = 'error';
    $request->extensionContext = 'deserunt';
    $request->extensionEnvironment = 'suscipit';
    $request->maxDuration = 437587;
    $request->statusCallback = 'http://unique-baboon.org';
    $request->statusCallbackMethod = CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum::GET;

    $requestSecurity = new CreateMediaProcessorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createMediaProcessor($request, $requestSecurity);

    if ($response->mediaV1MediaProcessor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPlayerStreamer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlayerStreamerCreatePlayerStreamerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlayerStreamerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePlayerStreamerCreatePlayerStreamerRequest();
    $request->maxDuration = 383441;
    $request->statusCallback = 'http://spotted-skyline.name';
    $request->statusCallbackMethod = CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum::POST;
    $request->video = false;

    $requestSecurity = new CreatePlayerStreamerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createPlayerStreamer($request, $requestSecurity);

    if ($response->mediaV1PlayerStreamer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPlayerStreamerPlaybackGrant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlayerStreamerPlaybackGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlayerStreamerPlaybackGrantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePlayerStreamerPlaybackGrantRequest();
    $request->requestBody = new CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest();
    $request->requestBody->accessControlAllowOrigin = 'excepturi';
    $request->requestBody->ttl = 392785;
    $request->sid = 'recusandae';

    $requestSecurity = new CreatePlayerStreamerPlaybackGrantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createPlayerStreamerPlaybackGrant($request, $requestSecurity);

    if ($response->mediaV1PlayerStreamerPlayerStreamerPlaybackGrant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMediaRecording

Deletes a MediaRecording resource identified by a SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMediaRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMediaRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMediaRecordingRequest();
    $request->sid = 'temporibus';

    $requestSecurity = new DeleteMediaRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteMediaRecording($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMediaProcessor

Returns a single MediaProcessor resource identified by a SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMediaProcessorRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMediaProcessorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMediaProcessorRequest();
    $request->sid = 'ab';

    $requestSecurity = new FetchMediaProcessorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMediaProcessor($request, $requestSecurity);

    if ($response->mediaV1MediaProcessor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMediaRecording

Returns a single MediaRecording resource identified by a SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMediaRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMediaRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMediaRecordingRequest();
    $request->sid = 'quis';

    $requestSecurity = new FetchMediaRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMediaRecording($request, $requestSecurity);

    if ($response->mediaV1MediaRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPlayerStreamer

Returns a single PlayerStreamer resource identified by a SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPlayerStreamerRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPlayerStreamerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPlayerStreamerRequest();
    $request->sid = 'veritatis';

    $requestSecurity = new FetchPlayerStreamerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchPlayerStreamer($request, $requestSecurity);

    if ($response->mediaV1PlayerStreamer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPlayerStreamerPlaybackGrant

**This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPlayerStreamerPlaybackGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPlayerStreamerPlaybackGrantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPlayerStreamerPlaybackGrantRequest();
    $request->sid = 'deserunt';

    $requestSecurity = new FetchPlayerStreamerPlaybackGrantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchPlayerStreamerPlaybackGrant($request, $requestSecurity);

    if ($response->mediaV1PlayerStreamerPlayerStreamerPlaybackGrant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMediaProcessor

Returns a list of MediaProcessors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMediaProcessorRequest;
use \OpenAPI\OpenAPI\Models\Shared\MediaProcessorEnumOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaProcessorEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMediaProcessorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMediaProcessorRequest();
    $request->order = MediaProcessorEnumOrderEnum::ASC;
    $request->page = 368241;
    $request->pageSize = 832620;
    $request->pageToken = 'sapiente';
    $request->status = MediaProcessorEnumStatusEnum::ENDED;

    $requestSecurity = new ListMediaProcessorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMediaProcessor($request, $requestSecurity);

    if ($response->listMediaProcessorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMediaRecording

Returns a list of MediaRecordings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMediaRecordingRequest;
use \OpenAPI\OpenAPI\Models\Shared\MediaRecordingEnumOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaRecordingEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMediaRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMediaRecordingRequest();
    $request->order = MediaRecordingEnumOrderEnum::ASC;
    $request->page = 870013;
    $request->pageSize = 870088;
    $request->pageToken = 'maiores';
    $request->processorSid = 'molestiae';
    $request->sourceSid = 'quod';
    $request->status = MediaRecordingEnumStatusEnum::FAILED;

    $requestSecurity = new ListMediaRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMediaRecording($request, $requestSecurity);

    if ($response->listMediaRecordingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPlayerStreamer

Returns a list of PlayerStreamers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPlayerStreamerRequest;
use \OpenAPI\OpenAPI\Models\Shared\PlayerStreamerEnumOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlayerStreamerEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPlayerStreamerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPlayerStreamerRequest();
    $request->order = PlayerStreamerEnumOrderEnum::ASC;
    $request->page = 520478;
    $request->pageSize = 780529;
    $request->pageToken = 'dolorum';
    $request->status = PlayerStreamerEnumStatusEnum::CREATED;

    $requestSecurity = new ListPlayerStreamerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listPlayerStreamer($request, $requestSecurity);

    if ($response->listPlayerStreamerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMediaProcessor

Updates a MediaProcessor resource identified by a SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaProcessorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaProcessorUpdateMediaProcessorRequest;
use \OpenAPI\OpenAPI\Models\Shared\MediaProcessorEnumUpdateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaProcessorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMediaProcessorRequest();
    $request->requestBody = new UpdateMediaProcessorUpdateMediaProcessorRequest();
    $request->requestBody->status = MediaProcessorEnumUpdateStatusEnum::ENDED;
    $request->sid = 'nam';

    $requestSecurity = new UpdateMediaProcessorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateMediaProcessor($request, $requestSecurity);

    if ($response->mediaV1MediaProcessor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePlayerStreamer

Updates a PlayerStreamer resource identified by a SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlayerStreamerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlayerStreamerUpdatePlayerStreamerRequest;
use \OpenAPI\OpenAPI\Models\Shared\PlayerStreamerEnumUpdateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlayerStreamerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePlayerStreamerRequest();
    $request->requestBody = new UpdatePlayerStreamerUpdatePlayerStreamerRequest();
    $request->requestBody->status = PlayerStreamerEnumUpdateStatusEnum::ENDED;
    $request->sid = 'officia';

    $requestSecurity = new UpdatePlayerStreamerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updatePlayerStreamer($request, $requestSecurity);

    if ($response->mediaV1PlayerStreamer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
