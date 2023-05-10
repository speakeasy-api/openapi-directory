# captions

### Available Operations

* [youtubeCaptionsDelete](#youtubecaptionsdelete) - Deletes a resource.
* [youtubeCaptionsDownload](#youtubecaptionsdownload) - Downloads a caption track.
* [youtubeCaptionsInsert](#youtubecaptionsinsert) - Inserts a new resource into this collection.
* [youtubeCaptionsList](#youtubecaptionslist) - Retrieves a list of resources, possibly filtered.
* [youtubeCaptionsUpdate](#youtubecaptionsupdate) - Updates an existing resource.

## youtubeCaptionsDelete

Deletes a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCaptionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->id = 'a52c3f5a-d019-4da1-bfe7-8f097b0074f1';
    $request->key = 'corporis';
    $request->oauthToken = 'dolore';
    $request->onBehalfOf = 'iusto';
    $request->onBehalfOfContentOwner = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new YoutubeCaptionsDeleteSecurity();
    $requestSecurity->option1 = new YoutubeCaptionsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->captions->youtubeCaptionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeCaptionsDownload

Downloads a caption track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsDownloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsDownloadSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsDownloadSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsDownloadSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCaptionsDownloadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->id = '99d488e1-e91e-4450-ad2a-bd44269802d5';
    $request->key = 'alias';
    $request->oauthToken = 'fugit';
    $request->onBehalfOf = 'dolorum';
    $request->onBehalfOfContentOwner = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->tfmt = 'facilis';
    $request->tlang = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new YoutubeCaptionsDownloadSecurity();
    $requestSecurity->option1 = new YoutubeCaptionsDownloadSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->captions->youtubeCaptionsDownload($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeCaptionsInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCaptionsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = 'non';
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'provident';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'sint';
    $request->onBehalfOf = 'officia';
    $request->onBehalfOfContentOwner = 'dolor';
    $request->part = [
        'a',
        'dolorum',
        'in',
        'in',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->sync = false;
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new YoutubeCaptionsInsertSecurity();
    $requestSecurity->option1 = new YoutubeCaptionsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->captions->youtubeCaptionsInsert($request, $requestSecurity);

    if ($response->caption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeCaptionsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCaptionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'ea';
    $request->id = [
        'laborum',
        'accusamus',
    ];
    $request->key = 'non';
    $request->oauthToken = 'occaecati';
    $request->onBehalfOf = 'enim';
    $request->onBehalfOfContentOwner = 'accusamus';
    $request->part = [
        'quidem',
        'provident',
        'nam',
        'id',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'sapiente';
    $request->videoId = 'amet';

    $requestSecurity = new YoutubeCaptionsListSecurity();
    $requestSecurity->option1 = new YoutubeCaptionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->captions->youtubeCaptionsList($request, $requestSecurity);

    if ($response->captionListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeCaptionsUpdate

Updates an existing resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCaptionsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCaptionsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'nisi';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'molestiae';
    $request->key = 'perferendis';
    $request->oauthToken = 'nihil';
    $request->onBehalfOf = 'magnam';
    $request->onBehalfOfContentOwner = 'distinctio';
    $request->part = [
        'labore',
        'labore',
        'suscipit',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->sync = false;
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new YoutubeCaptionsUpdateSecurity();
    $requestSecurity->option1 = new YoutubeCaptionsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->captions->youtubeCaptionsUpdate($request, $requestSecurity);

    if ($response->caption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
