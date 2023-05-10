# styleGuide

### Available Operations

* [createStyleGuideJson](#createstyleguidejson) - Upload a new style guide
* [createStyleGuideMultipart](#createstyleguidemultipart) - Upload a new style guide
* [deleteStyleGuide](#deletestyleguide) - Delete a style guide
* [downloadGlobalStyleGuide](#downloadglobalstyleguide) - Download account style guide
* [downloadStyleGuide](#downloadstyleguide) - Download a style guide
* [getStyleGuide](#getstyleguide) - View a style guide
* [getStyleGuides](#getstyleguides) - View style guides
* [updateGlobalStyleGuideJson](#updateglobalstyleguidejson) - Create or update the account style guide
* [updateGlobalStyleGuideMultipart](#updateglobalstyleguidemultipart) - Create or update the account style guide
* [updateStyleGuideJson](#updatestyleguidejson) - Update a style guide
* [updateStyleGuideMultipart](#updatestyleguidemultipart) - Update a style guide

## createStyleGuideJson

Upload a new style guide

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStyleGuideJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\StyleGuideUploadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStyleGuideJsonRequest();
    $request->styleGuideUploadRequest = new StyleGuideUploadRequest();
    $request->styleGuideUploadRequest->styleguides = 'accusantium';
    $request->projectId = 306986;

    $response = $sdk->styleGuide->createStyleGuideJson($request);

    if ($response->styleGuideList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStyleGuideMultipart

Upload a new style guide

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStyleGuideMultipartRequest;
use \OpenAPI\OpenAPI\Models\Shared\StyleGuideUploadRequest1;
use \OpenAPI\OpenAPI\Models\Shared\StyleGuideUploadRequestStyleguides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStyleGuideMultipartRequest();
    $request->styleGuideUploadRequest1 = new StyleGuideUploadRequest1();
    $request->styleGuideUploadRequest1->styleguides = new StyleGuideUploadRequestStyleguides();
    $request->styleGuideUploadRequest1->styleguides->content = 'sapiente';
    $request->styleGuideUploadRequest1->styleguides->styleguides = 'dicta';
    $request->projectId = 355369;

    $response = $sdk->styleGuide->createStyleGuideMultipart($request);

    if ($response->styleGuideList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStyleGuide

Delete the existing style guide from the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStyleGuideRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStyleGuideRequest();
    $request->projectId = 443879;
    $request->styleGuideId = 356707;

    $response = $sdk->styleGuide->deleteStyleGuide($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadGlobalStyleGuide

Download your account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->styleGuide->downloadGlobalStyleGuide();

    if ($response->downloadGlobalStyleGuide200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadStyleGuide

Download a previously uploaded style guide file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadStyleGuideRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadStyleGuideRequest();
    $request->projectId = 391774;
    $request->styleGuideId = 16328;

    $response = $sdk->styleGuide->downloadStyleGuide($request);

    if ($response->downloadStyleGuide200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStyleGuide

View the details of a style guide uploaded to a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStyleGuideRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStyleGuideWithEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStyleGuideRequest();
    $request->projectId = 531849;
    $request->styleGuideId = 185232;
    $request->with = [
        GetStyleGuideWithEnum::PREVIEW,
        GetStyleGuideWithEnum::PREVIEW,
        GetStyleGuideWithEnum::PREVIEW,
        GetStyleGuideWithEnum::PREVIEW,
    ];

    $response = $sdk->styleGuide->getStyleGuide($request);

    if ($response->styleGuide !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStyleGuides

View a list of style guides in your project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStyleGuidesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStyleGuidesWithEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStyleGuidesRequest();
    $request->projectId = 401259;
    $request->with = [
        GetStyleGuidesWithEnum::PREVIEW,
        GetStyleGuidesWithEnum::PREVIEW,
        GetStyleGuidesWithEnum::PREVIEW,
    ];

    $response = $sdk->styleGuide->getStyleGuides($request);

    if ($response->styleGuideList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalStyleGuideJson

Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AccountStyleGuideUploadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountStyleGuideUploadRequest();
    $request->styleguide = 'itaque';

    $response = $sdk->styleGuide->updateGlobalStyleGuideJson($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalStyleGuideMultipart

Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AccountStyleGuideUploadRequest1;
use \OpenAPI\OpenAPI\Models\Shared\AccountStyleGuideUploadRequestStyleguide;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountStyleGuideUploadRequest1();
    $request->styleguide = new AccountStyleGuideUploadRequestStyleguide();
    $request->styleguide->content = 'dolorum';
    $request->styleguide->styleguide = 'architecto';

    $response = $sdk->styleGuide->updateGlobalStyleGuideMultipart($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStyleGuideJson

Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStyleGuideJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\StyleGuideUploadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStyleGuideJsonRequest();
    $request->styleGuideUploadRequest = new StyleGuideUploadRequest();
    $request->styleGuideUploadRequest->styleguides = 'omnis';
    $request->projectId = 945302;
    $request->styleGuideId = 98478;

    $response = $sdk->styleGuide->updateStyleGuideJson($request);

    if ($response->styleGuide !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStyleGuideMultipart

Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStyleGuideMultipartRequest;
use \OpenAPI\OpenAPI\Models\Shared\StyleGuideUploadRequest1;
use \OpenAPI\OpenAPI\Models\Shared\StyleGuideUploadRequestStyleguides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStyleGuideMultipartRequest();
    $request->styleGuideUploadRequest1 = new StyleGuideUploadRequest1();
    $request->styleGuideUploadRequest1->styleguides = new StyleGuideUploadRequestStyleguides();
    $request->styleGuideUploadRequest1->styleguides->content = 'at';
    $request->styleGuideUploadRequest1->styleguides->styleguides = 'et';
    $request->projectId = 454162;
    $request->styleGuideId = 55965;

    $response = $sdk->styleGuide->updateStyleGuideMultipart($request);

    if ($response->styleGuide !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
