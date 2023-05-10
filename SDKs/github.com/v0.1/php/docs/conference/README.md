# conference

## Overview

API methods responsible for managing conference rooms

### Available Operations

* [postV01ConferenceDeaf](#postv01conferencedeaf) - /v0.1/ConferenceDeaf/
* [postV01ConferenceHangup](#postv01conferencehangup) - /v0.1/ConferenceHangup/
* [postV01ConferenceKick](#postv01conferencekick) - /v0.1/ConferenceKick/
* [postV01ConferenceList](#postv01conferencelist) - /v0.1/ConferenceList/
* [postV01ConferenceListMembers](#postv01conferencelistmembers) - /v0.1/ConferenceListMembers/
* [postV01ConferenceMute](#postv01conferencemute) - /v0.1/ConferenceMute/
* [postV01ConferencePlay](#postv01conferenceplay) - /v0.1/ConferencePlay/
* [postV01ConferenceRecordStart](#postv01conferencerecordstart) - /v0.1/ConferenceRecordStart/
* [postV01ConferenceRecordStop](#postv01conferencerecordstop) - /v0.1/ConferenceRecordStop/
* [postV01ConferenceSpeak](#postv01conferencespeak) - /v0.1/ConferenceSpeak/
* [postV01ConferenceUndeaf](#postv01conferenceundeaf) - /v0.1/ConferenceUndeaf/
* [postV01ConferenceUnmute](#postv01conferenceunmute) - /v0.1/ConferenceUnmute/

## postV01ConferenceDeaf

Blocks audio to one or more conference members

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceDeafParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceDeafSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceDeafParameters();
    $request->conferenceName = 'Room402';
    $request->memberID = '13,42';

    $requestSecurity = new PostV01ConferenceDeafSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceDeaf($request, $requestSecurity);

    if ($response->conferenceDeafResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferenceHangup

Kicks one or more conference members, without playing the kick sound

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceHangupParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceHangupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceHangupParameters();
    $request->conferenceName = 'Room402';
    $request->memberID = '13,42';

    $requestSecurity = new PostV01ConferenceHangupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceHangup($request, $requestSecurity);

    if ($response->conferenceHangupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferenceKick

Kicks one or more conference members

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceKickParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceKickSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceKickParameters();
    $request->conferenceName = 'Room402';
    $request->memberID = '13,42';

    $requestSecurity = new PostV01ConferenceKickSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceKick($request, $requestSecurity);

    if ($response->conferenceKickResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferenceList

Returns a list of all established conferences

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceListParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceListParameters();
    $request->callUUIDFilter = '872066e1-fd89-4c57-8733-93c113980bc9,55e4214a-604a-4b56-82e4-97834b0d524e';
    $request->deafFilter = true;
    $request->memberFilter = '13,42';
    $request->mutedFilter = true;

    $requestSecurity = new PostV01ConferenceListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceList($request, $requestSecurity);

    if ($response->conferenceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferenceListMembers

Retrieves the member list for a given conference

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceListMembersParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceListMembersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceListMembersParameters();
    $request->callUUIDFilter = '872066e1-fd89-4c57-8733-93c113980bc9,55e4214a-604a-4b56-82e4-97834b0d524e';
    $request->conferenceName = 'Room402';
    $request->deafFilter = true;
    $request->memberFilter = '13,42';
    $request->mutedFilter = true;

    $requestSecurity = new PostV01ConferenceListMembersSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceListMembers($request, $requestSecurity);

    if ($response->conferenceListMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferenceMute

Blocks audio from one or more conference members

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceMuteParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceMuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceMuteParameters();
    $request->conferenceName = 'Room402';
    $request->memberID = '13,42';

    $requestSecurity = new PostV01ConferenceMuteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceMute($request, $requestSecurity);

    if ($response->conferenceMuteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferencePlay

Plays media to one or more conference members

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferencePlayParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferencePlaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferencePlayParameters();
    $request->conferenceName = 'Room402';
    $request->filePath = '/var/local/media/sample.wav';
    $request->memberID = '13,42';

    $requestSecurity = new PostV01ConferencePlaySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferencePlay($request, $requestSecurity);

    if ($response->conferencePlayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferenceRecordStart

Initiates a conference recording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceRecordStartParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceRecordStartParametersFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceRecordStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceRecordStartParameters();
    $request->conferenceName = 'Room402';
    $request->fileFormat = ConferenceRecordStartParametersFileFormatEnum::WAV;
    $request->fileName = 'Room402Rec';
    $request->filePath = '/tmp/recordings';

    $requestSecurity = new PostV01ConferenceRecordStartSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceRecordStart($request, $requestSecurity);

    if ($response->conferenceRecordStartResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferenceRecordStop

Stops a conference recording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceRecordStopParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceRecordStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceRecordStopParameters();
    $request->conferenceName = 'Room402';
    $request->recordFile = '/tmp/recording/sample.wav';

    $requestSecurity = new PostV01ConferenceRecordStopSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceRecordStop($request, $requestSecurity);

    if ($response->conferenceRecordStopResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferenceSpeak

Plays synthesized speech into a conference

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceSpeakParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceSpeakSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceSpeakParameters();
    $request->conferenceName = 'Room402';
    $request->memberID = '13,42';
    $request->text = 'The quick brown fox jumps over the lazy dog';

    $requestSecurity = new PostV01ConferenceSpeakSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceSpeak($request, $requestSecurity);

    if ($response->conferenceSpeakResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferenceUndeaf

Restores audio to one or more conference members

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceUndeafParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceUndeafSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceUndeafParameters();
    $request->conferenceName = 'Room402';
    $request->memberID = '13,42';

    $requestSecurity = new PostV01ConferenceUndeafSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceUndeaf($request, $requestSecurity);

    if ($response->conferenceUndeafResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ConferenceUnmute

Restores audio from one or more conference members

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceUnmuteParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ConferenceUnmuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceUnmuteParameters();
    $request->conferenceName = 'Room402';
    $request->memberID = '13,42';

    $requestSecurity = new PostV01ConferenceUnmuteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->conference->postV01ConferenceUnmute($request, $requestSecurity);

    if ($response->conferenceUnmuteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
