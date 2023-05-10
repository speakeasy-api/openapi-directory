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
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'qui';
    $request->key = 'accusantium';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->publicDelegatedPrefix = 'totam';
    $request->quotaUser = 'tenetur';
    $request->requestId = 'voluptate';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'vitae';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'inventore';
    $request->key = 'facere';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->publicDelegatedPrefix = 'ab';
    $request->quotaUser = 'ex';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'sed';

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
    $request->publicDelegatedPrefix->creationTimestamp = 'sequi';
    $request->publicDelegatedPrefix->description = 'eligendi';
    $request->publicDelegatedPrefix->fingerprint = 'voluptatum';
    $request->publicDelegatedPrefix->id = 'perferendis';
    $request->publicDelegatedPrefix->ipCidrRange = 'laborum';
    $request->publicDelegatedPrefix->isLiveMigration = false;
    $request->publicDelegatedPrefix->kind = 'omnis';
    $request->publicDelegatedPrefix->name = 'Mindy Williamson';
    $request->publicDelegatedPrefix->parentPrefix = 'non';
    $request->publicDelegatedPrefix->publicDelegatedSubPrefixs = [
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
    ];
    $request->publicDelegatedPrefix->region = 'illum';
    $request->publicDelegatedPrefix->selfLink = 'at';
    $request->publicDelegatedPrefix->status = PublicDelegatedPrefixStatusEnum::READY_TO_ANNOUNCE;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'esse';
    $request->fields = 'laborum';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'quasi';
    $request->requestId = 'quas';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'porro';

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
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'et';
    $request->filter = 'nulla';
    $request->key = 'magni';
    $request->maxResults = 618073;
    $request->oauthToken = 'illum';
    $request->orderBy = 'a';
    $request->pageToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'unde';
    $request->quotaUser = 'ut';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'doloribus';

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
    $request->publicDelegatedPrefix1->creationTimestamp = 'quisquam';
    $request->publicDelegatedPrefix1->description = 'facere';
    $request->publicDelegatedPrefix1->fingerprint = 'dignissimos';
    $request->publicDelegatedPrefix1->id = 'iste';
    $request->publicDelegatedPrefix1->ipCidrRange = 'provident';
    $request->publicDelegatedPrefix1->isLiveMigration = false;
    $request->publicDelegatedPrefix1->kind = 'dolor';
    $request->publicDelegatedPrefix1->name = 'Kevin Beatty';
    $request->publicDelegatedPrefix1->parentPrefix = 'laborum';
    $request->publicDelegatedPrefix1->publicDelegatedSubPrefixs = [
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
    ];
    $request->publicDelegatedPrefix1->region = 'assumenda';
    $request->publicDelegatedPrefix1->selfLink = 'explicabo';
    $request->publicDelegatedPrefix1->status = PublicDelegatedPrefixStatusEnum::READY_TO_ANNOUNCE;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'alias';
    $request->fields = 'velit';
    $request->key = 'ullam';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'velit';
    $request->publicDelegatedPrefixPathParameter = 'ratione';
    $request->quotaUser = 'quas';
    $request->requestId = 'maxime';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'doloremque';

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
