# segments

## Overview

Segments include the audio content and related information such as the in-cue and out-cue.

### Available Operations

* [deleteApiV2SegmentsId](#deleteapiv2segmentsid) - Deletes the segment with the given ID.
* [getApiV2Segments](#getapiv2segments) - Returns the segments matching the query parameters.
* [getApiV2SegmentsId](#getapiv2segmentsid) - Returns the segment matching the given ID.
* [getApiV2SegmentsIdContent](#getapiv2segmentsidcontent) - UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
* [postApiV2Segments](#postapiv2segments) - Creates a new segment.

## deleteApiV2SegmentsId

Deletes the segment with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2SegmentsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2SegmentsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV2SegmentsIdRequest();
    $request->id = 449950;

    $requestSecurity = new DeleteApiV2SegmentsIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->segments->deleteApiV2SegmentsId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2Segments

Returns the segments matching the query parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SegmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SegmentsOrderByIDEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SegmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2SegmentsRequest();
    $request->episodeId = 359508;
    $request->orderById = GetApiV2SegmentsOrderByIDEnum::DESC;
    $request->pageSize = 437032;
    $request->pageStart = 902349;
    $request->segmentNumber = 697631;

    $requestSecurity = new GetApiV2SegmentsSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->segments->getApiV2Segments($request, $requestSecurity);

    if ($response->segments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2SegmentsId

Returns the segment matching the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SegmentsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SegmentsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2SegmentsIdRequest();
    $request->id = 99280;

    $requestSecurity = new GetApiV2SegmentsIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->segments->getApiV2SegmentsId($request, $requestSecurity);

    if ($response->segment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2SegmentsIdContent

UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SegmentsIdContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SegmentsIdContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2SegmentsIdContentRequest();
    $request->id = 60225;

    $requestSecurity = new GetApiV2SegmentsIdContentSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->segments->getApiV2SegmentsIdContent($request, $requestSecurity);

    if ($response->getApiV2SegmentsIdContent200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV2Segments

Creates a new segment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2SegmentsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2SegmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV2SegmentsRequestBody();
    $request->cdDriveUri = 'reiciendis';
    $request->episodeId = 666767;
    $request->inCue = 'mollitia';
    $request->outCue = 'laborum';
    $request->segmentNumber = 170909;

    $requestSecurity = new PostApiV2SegmentsSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->segments->postApiV2Segments($request, $requestSecurity);

    if ($response->segment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
