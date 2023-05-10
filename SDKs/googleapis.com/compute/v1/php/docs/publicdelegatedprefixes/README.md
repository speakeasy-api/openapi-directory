# publicDelegatedPrefixes

### Available Operations

* [computePublicDelegatedPrefixesAggregatedList](#computepublicdelegatedprefixesaggregatedlist) - Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.
* [computePublicDelegatedPrefixesDelete](#computepublicdelegatedprefixesdelete) - Deletes the specified PublicDelegatedPrefix in the given region.
* [computePublicDelegatedPrefixesGet](#computepublicdelegatedprefixesget) - Returns the specified PublicDelegatedPrefix resource in the given region.
* [computePublicDelegatedPrefixesInsert](#computepublicdelegatedprefixesinsert) - Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.
* [computePublicDelegatedPrefixesList](#computepublicdelegatedprefixeslist) - Lists the PublicDelegatedPrefixes for a project in the given region.
* [computePublicDelegatedPrefixesPatch](#computepublicdelegatedprefixespatch) - Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

## computePublicDelegatedPrefixesAggregatedList

Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicDelegatedPrefixesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sequi';
    $request->fields = 'sapiente';
    $request->filter = 'illum';
    $request->includeAllScopes = false;
    $request->key = 'nesciunt';
    $request->maxResults = 760941;
    $request->oauthToken = 'corrupti';
    $request->orderBy = 'inventore';
    $request->pageToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'dicta';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'deleniti';

    $requestSecurity = new ComputePublicDelegatedPrefixesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputePublicDelegatedPrefixesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicDelegatedPrefixes->computePublicDelegatedPrefixesAggregatedList($request, $requestSecurity);

    if ($response->publicDelegatedPrefixAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePublicDelegatedPrefixesDelete

Deletes the specified PublicDelegatedPrefix in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicDelegatedPrefixesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'voluptatibus';
    $request->key = 'iste';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->publicDelegatedPrefix = 'pariatur';
    $request->quotaUser = 'officia';
    $request->region = 'velit';
    $request->requestId = 'debitis';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'minima';

    $requestSecurity = new ComputePublicDelegatedPrefixesDeleteSecurity();
    $requestSecurity->option1 = new ComputePublicDelegatedPrefixesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicDelegatedPrefixes->computePublicDelegatedPrefixesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePublicDelegatedPrefixesGet

Returns the specified PublicDelegatedPrefix resource in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicDelegatedPrefixesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facere';
    $request->fields = 'iste';
    $request->key = 'numquam';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->publicDelegatedPrefix = 'minus';
    $request->quotaUser = 'sint';
    $request->region = 'aliquam';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'dicta';

    $requestSecurity = new ComputePublicDelegatedPrefixesGetSecurity();
    $requestSecurity->option1 = new ComputePublicDelegatedPrefixesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicDelegatedPrefixes->computePublicDelegatedPrefixesGet($request, $requestSecurity);

    if ($response->publicDelegatedPrefix !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePublicDelegatedPrefixesInsert

Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixPublicDelegatedSubPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicDelegatedPrefixesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->publicDelegatedPrefix = new PublicDelegatedPrefix();
    $request->publicDelegatedPrefix->creationTimestamp = 'reprehenderit';
    $request->publicDelegatedPrefix->description = 'esse';
    $request->publicDelegatedPrefix->fingerprint = 'magni';
    $request->publicDelegatedPrefix->id = 'ea';
    $request->publicDelegatedPrefix->ipCidrRange = 'quibusdam';
    $request->publicDelegatedPrefix->isLiveMigration = false;
    $request->publicDelegatedPrefix->kind = 'veritatis';
    $request->publicDelegatedPrefix->name = 'Miss Thelma Crona';
    $request->publicDelegatedPrefix->parentPrefix = 'velit';
    $request->publicDelegatedPrefix->publicDelegatedSubPrefixs = [
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
    ];
    $request->publicDelegatedPrefix->region = 'fuga';
    $request->publicDelegatedPrefix->selfLink = 'minima';
    $request->publicDelegatedPrefix->status = PublicDelegatedPrefixStatusEnum::DELETING;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'architecto';
    $request->key = 'totam';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'tenetur';
    $request->region = 'iure';
    $request->requestId = 'consequatur';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'cum';
    $request->userIp = 'occaecati';

    $requestSecurity = new ComputePublicDelegatedPrefixesInsertSecurity();
    $requestSecurity->option1 = new ComputePublicDelegatedPrefixesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicDelegatedPrefixes->computePublicDelegatedPrefixesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePublicDelegatedPrefixesList

Lists the PublicDelegatedPrefixes for a project in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicDelegatedPrefixesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'atque';
    $request->filter = 'saepe';
    $request->key = 'eum';
    $request->maxResults = 565245;
    $request->oauthToken = 'fuga';
    $request->orderBy = 'non';
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'ut';
    $request->region = 'non';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'totam';

    $requestSecurity = new ComputePublicDelegatedPrefixesListSecurity();
    $requestSecurity->option1 = new ComputePublicDelegatedPrefixesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicDelegatedPrefixes->computePublicDelegatedPrefixesList($request, $requestSecurity);

    if ($response->publicDelegatedPrefixList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePublicDelegatedPrefixesPatch

Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixPublicDelegatedSubPrefix;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixPublicDelegatedSubPrefixStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicDelegatedPrefixStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicDelegatedPrefixesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->publicDelegatedPrefix1 = new PublicDelegatedPrefix();
    $request->publicDelegatedPrefix1->creationTimestamp = 'quibusdam';
    $request->publicDelegatedPrefix1->description = 'harum';
    $request->publicDelegatedPrefix1->fingerprint = 'itaque';
    $request->publicDelegatedPrefix1->id = 'porro';
    $request->publicDelegatedPrefix1->ipCidrRange = 'ducimus';
    $request->publicDelegatedPrefix1->isLiveMigration = false;
    $request->publicDelegatedPrefix1->kind = 'ad';
    $request->publicDelegatedPrefix1->name = 'Angel Lockman';
    $request->publicDelegatedPrefix1->parentPrefix = 'aut';
    $request->publicDelegatedPrefix1->publicDelegatedSubPrefixs = [
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
    ];
    $request->publicDelegatedPrefix1->region = 'veniam';
    $request->publicDelegatedPrefix1->selfLink = 'cupiditate';
    $request->publicDelegatedPrefix1->status = PublicDelegatedPrefixStatusEnum::DELETING;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'debitis';
    $request->key = 'neque';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->publicDelegatedPrefixPathParameter = 'quibusdam';
    $request->quotaUser = 'deleniti';
    $request->region = 'quas';
    $request->requestId = 'magnam';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'sapiente';

    $requestSecurity = new ComputePublicDelegatedPrefixesPatchSecurity();
    $requestSecurity->option1 = new ComputePublicDelegatedPrefixesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicDelegatedPrefixes->computePublicDelegatedPrefixesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
