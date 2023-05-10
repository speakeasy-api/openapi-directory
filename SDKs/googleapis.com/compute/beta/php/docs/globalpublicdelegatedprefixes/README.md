# globalPublicDelegatedPrefixes

### Available Operations

* [computeGlobalPublicDelegatedPrefixesDelete](#computeglobalpublicdelegatedprefixesdelete) - Deletes the specified global PublicDelegatedPrefix.
* [computeGlobalPublicDelegatedPrefixesGet](#computeglobalpublicdelegatedprefixesget) - Returns the specified global PublicDelegatedPrefix resource.
* [computeGlobalPublicDelegatedPrefixesInsert](#computeglobalpublicdelegatedprefixesinsert) - Creates a global PublicDelegatedPrefix in the specified project using the parameters that are included in the request.
* [computeGlobalPublicDelegatedPrefixesList](#computeglobalpublicdelegatedprefixeslist) - Lists the global PublicDelegatedPrefixes for a project.
* [computeGlobalPublicDelegatedPrefixesPatch](#computeglobalpublicdelegatedprefixespatch) - Patches the specified global PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

## computeGlobalPublicDelegatedPrefixesDelete

Deletes the specified global PublicDelegatedPrefix.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalPublicDelegatedPrefixesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'numquam';
    $request->fields = 'corrupti';
    $request->key = 'similique';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->publicDelegatedPrefix = 'reiciendis';
    $request->quotaUser = 'iste';
    $request->requestId = 'amet';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'impedit';

    $requestSecurity = new ComputeGlobalPublicDelegatedPrefixesDeleteSecurity();
    $requestSecurity->option1 = new ComputeGlobalPublicDelegatedPrefixesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalPublicDelegatedPrefixes->computeGlobalPublicDelegatedPrefixesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalPublicDelegatedPrefixesGet

Returns the specified global PublicDelegatedPrefix resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalPublicDelegatedPrefixesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quas';
    $request->fields = 'voluptatem';
    $request->key = 'provident';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->publicDelegatedPrefix = 'vero';
    $request->quotaUser = 'fuga';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'error';

    $requestSecurity = new ComputeGlobalPublicDelegatedPrefixesGetSecurity();
    $requestSecurity->option1 = new ComputeGlobalPublicDelegatedPrefixesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalPublicDelegatedPrefixes->computeGlobalPublicDelegatedPrefixesGet($request, $requestSecurity);

    if ($response->publicDelegatedPrefix !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalPublicDelegatedPrefixesInsert

Creates a global PublicDelegatedPrefix in the specified project using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixPublicDelegatedSubPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalPublicDelegatedPrefixesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->publicDelegatedPrefix = new PublicDelegatedPrefix();
    $request->publicDelegatedPrefix->creationTimestamp = 'a';
    $request->publicDelegatedPrefix->description = 'consectetur';
    $request->publicDelegatedPrefix->fingerprint = 'sapiente';
    $request->publicDelegatedPrefix->id = 'voluptatibus';
    $request->publicDelegatedPrefix->ipCidrRange = 'assumenda';
    $request->publicDelegatedPrefix->isLiveMigration = false;
    $request->publicDelegatedPrefix->kind = 'repellendus';
    $request->publicDelegatedPrefix->name = 'Van Kuhlman IV';
    $request->publicDelegatedPrefix->parentPrefix = 'omnis';
    $request->publicDelegatedPrefix->publicDelegatedSubPrefixs = [
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
    ];
    $request->publicDelegatedPrefix->region = 'asperiores';
    $request->publicDelegatedPrefix->selfLink = 'modi';
    $request->publicDelegatedPrefix->status = PublicDelegatedPrefixStatusEnum::READY_TO_ANNOUNCE;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'sed';
    $request->key = 'non';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'fugiat';
    $request->quotaUser = 'soluta';
    $request->requestId = 'ipsa';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'vero';

    $requestSecurity = new ComputeGlobalPublicDelegatedPrefixesInsertSecurity();
    $requestSecurity->option1 = new ComputeGlobalPublicDelegatedPrefixesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalPublicDelegatedPrefixes->computeGlobalPublicDelegatedPrefixesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalPublicDelegatedPrefixesList

Lists the global PublicDelegatedPrefixes for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalPublicDelegatedPrefixesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'praesentium';
    $request->filter = 'iusto';
    $request->key = 'fugiat';
    $request->maxResults = 313695;
    $request->oauthToken = 'iure';
    $request->orderBy = 'laudantium';
    $request->pageToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'accusamus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'quibusdam';

    $requestSecurity = new ComputeGlobalPublicDelegatedPrefixesListSecurity();
    $requestSecurity->option1 = new ComputeGlobalPublicDelegatedPrefixesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalPublicDelegatedPrefixes->computeGlobalPublicDelegatedPrefixesList($request, $requestSecurity);

    if ($response->publicDelegatedPrefixList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalPublicDelegatedPrefixesPatch

Patches the specified global PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixPublicDelegatedSubPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalPublicDelegatedPrefixesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalPublicDelegatedPrefixesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->publicDelegatedPrefix1 = new PublicDelegatedPrefix();
    $request->publicDelegatedPrefix1->creationTimestamp = 'enim';
    $request->publicDelegatedPrefix1->description = 'animi';
    $request->publicDelegatedPrefix1->fingerprint = 'unde';
    $request->publicDelegatedPrefix1->id = 'quae';
    $request->publicDelegatedPrefix1->ipCidrRange = 'eum';
    $request->publicDelegatedPrefix1->isLiveMigration = false;
    $request->publicDelegatedPrefix1->kind = 'nostrum';
    $request->publicDelegatedPrefix1->name = 'Brent Dibbert';
    $request->publicDelegatedPrefix1->parentPrefix = 'illum';
    $request->publicDelegatedPrefix1->publicDelegatedSubPrefixs = [
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
    ];
    $request->publicDelegatedPrefix1->region = 'placeat';
    $request->publicDelegatedPrefix1->selfLink = 'dolores';
    $request->publicDelegatedPrefix1->status = PublicDelegatedPrefixStatusEnum::ANNOUNCED;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'voluptas';
    $request->key = 'quo';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->publicDelegatedPrefixPathParameter = 'omnis';
    $request->quotaUser = 'omnis';
    $request->requestId = 'fugit';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'molestiae';

    $requestSecurity = new ComputeGlobalPublicDelegatedPrefixesPatchSecurity();
    $requestSecurity->option1 = new ComputeGlobalPublicDelegatedPrefixesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalPublicDelegatedPrefixes->computeGlobalPublicDelegatedPrefixesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
