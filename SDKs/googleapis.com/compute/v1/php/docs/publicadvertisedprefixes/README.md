# publicAdvertisedPrefixes

### Available Operations

* [computePublicAdvertisedPrefixesDelete](#computepublicadvertisedprefixesdelete) - Deletes the specified PublicAdvertisedPrefix
* [computePublicAdvertisedPrefixesGet](#computepublicadvertisedprefixesget) - Returns the specified PublicAdvertisedPrefix resource.
* [computePublicAdvertisedPrefixesInsert](#computepublicadvertisedprefixesinsert) - Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.
* [computePublicAdvertisedPrefixesList](#computepublicadvertisedprefixeslist) - Lists the PublicAdvertisedPrefixes for a project.
* [computePublicAdvertisedPrefixesPatch](#computepublicadvertisedprefixespatch) - Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

## computePublicAdvertisedPrefixesDelete

Deletes the specified PublicAdvertisedPrefix

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicAdvertisedPrefixesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'qui';
    $request->fields = 'soluta';
    $request->key = 'ullam';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->publicAdvertisedPrefix = 'incidunt';
    $request->quotaUser = 'quibusdam';
    $request->requestId = 'doloremque';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'dolorum';
    $request->userIp = 'explicabo';

    $requestSecurity = new ComputePublicAdvertisedPrefixesDeleteSecurity();
    $requestSecurity->option1 = new ComputePublicAdvertisedPrefixesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicAdvertisedPrefixes->computePublicAdvertisedPrefixesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePublicAdvertisedPrefixesGet

Returns the specified PublicAdvertisedPrefix resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicAdvertisedPrefixesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'est';
    $request->key = 'accusamus';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->publicAdvertisedPrefix = 'omnis';
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'molestiae';

    $requestSecurity = new ComputePublicAdvertisedPrefixesGetSecurity();
    $requestSecurity->option1 = new ComputePublicAdvertisedPrefixesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicAdvertisedPrefixes->computePublicAdvertisedPrefixesGet($request, $requestSecurity);

    if ($response->publicAdvertisedPrefix !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePublicAdvertisedPrefixesInsert

Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicAdvertisedPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicAdvertisedPrefixPublicDelegatedPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicAdvertisedPrefixStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicAdvertisedPrefixesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->publicAdvertisedPrefix = new PublicAdvertisedPrefix();
    $request->publicAdvertisedPrefix->creationTimestamp = 'est';
    $request->publicAdvertisedPrefix->description = 'placeat';
    $request->publicAdvertisedPrefix->dnsVerificationIp = 'sequi';
    $request->publicAdvertisedPrefix->fingerprint = 'et';
    $request->publicAdvertisedPrefix->id = 'tempore';
    $request->publicAdvertisedPrefix->ipCidrRange = 'voluptates';
    $request->publicAdvertisedPrefix->kind = 'cumque';
    $request->publicAdvertisedPrefix->name = 'Jordan Feest';
    $request->publicAdvertisedPrefix->publicDelegatedPrefixs = [
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
    ];
    $request->publicAdvertisedPrefix->selfLink = 'esse';
    $request->publicAdvertisedPrefix->sharedSecret = 'deleniti';
    $request->publicAdvertisedPrefix->status = PublicAdvertisedPrefixStatusEnum::PTR_CONFIGURED;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'sapiente';
    $request->key = 'maxime';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'nulla';
    $request->requestId = 'sint';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'aperiam';

    $requestSecurity = new ComputePublicAdvertisedPrefixesInsertSecurity();
    $requestSecurity->option1 = new ComputePublicAdvertisedPrefixesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicAdvertisedPrefixes->computePublicAdvertisedPrefixesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePublicAdvertisedPrefixesList

Lists the PublicAdvertisedPrefixes for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicAdvertisedPrefixesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'unde';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'error';
    $request->filter = 'aliquam';
    $request->key = 'natus';
    $request->maxResults = 320259;
    $request->oauthToken = 'cum';
    $request->orderBy = 'dolorum';
    $request->pageToken = 'quod';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'quae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'tenetur';
    $request->userIp = 'eaque';

    $requestSecurity = new ComputePublicAdvertisedPrefixesListSecurity();
    $requestSecurity->option1 = new ComputePublicAdvertisedPrefixesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicAdvertisedPrefixes->computePublicAdvertisedPrefixesList($request, $requestSecurity);

    if ($response->publicAdvertisedPrefixList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePublicAdvertisedPrefixesPatch

Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicAdvertisedPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicAdvertisedPrefixPublicDelegatedPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicAdvertisedPrefixStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicAdvertisedPrefixesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->publicAdvertisedPrefix1 = new PublicAdvertisedPrefix();
    $request->publicAdvertisedPrefix1->creationTimestamp = 'rerum';
    $request->publicAdvertisedPrefix1->description = 'magni';
    $request->publicAdvertisedPrefix1->dnsVerificationIp = 'laudantium';
    $request->publicAdvertisedPrefix1->fingerprint = 'repudiandae';
    $request->publicAdvertisedPrefix1->id = 'minus';
    $request->publicAdvertisedPrefix1->ipCidrRange = 'porro';
    $request->publicAdvertisedPrefix1->kind = 'atque';
    $request->publicAdvertisedPrefix1->name = 'Mrs. Charlotte Miller';
    $request->publicAdvertisedPrefix1->publicDelegatedPrefixs = [
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
    ];
    $request->publicAdvertisedPrefix1->selfLink = 'a';
    $request->publicAdvertisedPrefix1->sharedSecret = 'aliquid';
    $request->publicAdvertisedPrefix1->status = PublicAdvertisedPrefixStatusEnum::PREFIX_CONFIGURATION_COMPLETE;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eum';
    $request->fields = 'sint';
    $request->key = 'eligendi';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->publicAdvertisedPrefixPathParameter = 'quod';
    $request->quotaUser = 'laboriosam';
    $request->requestId = 'quidem';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'praesentium';
    $request->userIp = 'totam';

    $requestSecurity = new ComputePublicAdvertisedPrefixesPatchSecurity();
    $requestSecurity->option1 = new ComputePublicAdvertisedPrefixesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicAdvertisedPrefixes->computePublicAdvertisedPrefixesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
