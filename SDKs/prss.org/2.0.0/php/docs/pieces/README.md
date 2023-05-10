# pieces

## Overview

Pieces define specific story or song level metadata within an episode and segment. For example, an 18 minute audio segment may be composed of multiple 2 or 3 minute pieces.

### Available Operations

* [deleteApiV2PiecesId](#deleteapiv2piecesid) - Deletes the piece with the given ID.
* [getApiV2Pieces](#getapiv2pieces) - Returns the pieces matching the query parameters.
* [getApiV2PiecesId](#getapiv2piecesid) - Returns the piece matching the given ID.
* [postApiV2Pieces](#postapiv2pieces) - Create a new piece.

## deleteApiV2PiecesId

Deletes the piece with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2PiecesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2PiecesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV2PiecesIdRequest();
    $request->id = 521848;

    $requestSecurity = new DeleteApiV2PiecesIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pieces->deleteApiV2PiecesId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2Pieces

Returns the pieces matching the query parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2PiecesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2PiecesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2PiecesRequest();
    $request->episodeId = 105907;

    $requestSecurity = new GetApiV2PiecesSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pieces->getApiV2Pieces($request, $requestSecurity);

    if ($response->pieces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2PiecesId

Returns the piece matching the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2PiecesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2PiecesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2PiecesIdRequest();
    $request->id = 414662;

    $requestSecurity = new GetApiV2PiecesIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pieces->getApiV2PiecesId($request, $requestSecurity);

    if ($response->piece !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV2Pieces

Create a new piece.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PieceInput;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2PiecesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PieceInput();
    $request->contributor = 'molestiae';
    $request->description = 'modi';
    $request->episodeId = 186332;
    $request->fullDescription = 'impedit';
    $request->imageCdDriveUri = 'cum';
    $request->imageFileName = 'esse';
    $request->imageFileSize = 216550;
    $request->imageOriginalFileName = 'excepturi';
    $request->relativeEndTime = 135218;
    $request->relativeStartTime = 18789;
    $request->segmentNumber = 324141;
    $request->title = 'Miss';

    $requestSecurity = new PostApiV2PiecesSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pieces->postApiV2Pieces($request, $requestSecurity);

    if ($response->piece !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
