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
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'ullam';
    $request->filter = 'saepe';
    $request->includeAllScopes = false;
    $request->key = 'impedit';
    $request->maxResults = 165507;
    $request->oauthToken = 'suscipit';
    $request->orderBy = 'ipsam';
    $request->pageToken = 'error';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'debitis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'totam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'alias';
    $request->fields = 'quod';
    $request->key = 'nisi';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->publicDelegatedPrefix = 'tenetur';
    $request->quotaUser = 'vel';
    $request->region = 'corrupti';
    $request->requestId = 'voluptates';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'cumque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'possimus';
    $request->fields = 'maiores';
    $request->key = 'est';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->publicDelegatedPrefix = 'nostrum';
    $request->quotaUser = 'incidunt';
    $request->region = 'enim';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'ipsa';
    $request->userIp = 'quaerat';

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
    $request->publicDelegatedPrefix->creationTimestamp = 'aperiam';
    $request->publicDelegatedPrefix->description = 'optio';
    $request->publicDelegatedPrefix->fingerprint = 'eum';
    $request->publicDelegatedPrefix->id = 'commodi';
    $request->publicDelegatedPrefix->ipCidrRange = 'amet';
    $request->publicDelegatedPrefix->isLiveMigration = false;
    $request->publicDelegatedPrefix->kind = 'quia';
    $request->publicDelegatedPrefix->name = 'Clifford Ernser DVM';
    $request->publicDelegatedPrefix->parentPrefix = 'temporibus';
    $request->publicDelegatedPrefix->publicDelegatedSubPrefixs = [
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
    ];
    $request->publicDelegatedPrefix->region = 'ipsa';
    $request->publicDelegatedPrefix->selfLink = 'vitae';
    $request->publicDelegatedPrefix->status = PublicDelegatedPrefixStatusEnum::READY_TO_ANNOUNCE;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'beatae';
    $request->key = 'eveniet';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'voluptate';
    $request->region = 'libero';
    $request->requestId = 'quod';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'error';
    $request->userIp = 'at';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'autem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->fields = 'iusto';
    $request->filter = 'dignissimos';
    $request->key = 'debitis';
    $request->maxResults = 779471;
    $request->oauthToken = 'saepe';
    $request->orderBy = 'tempore';
    $request->pageToken = 'sunt';
    $request->prettyPrint = false;
    $request->project = 'nisi';
    $request->quotaUser = 'nulla';
    $request->region = 'architecto';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'a';
    $request->userIp = 'et';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->publicDelegatedPrefix1 = new PublicDelegatedPrefix();
    $request->publicDelegatedPrefix1->creationTimestamp = 'delectus';
    $request->publicDelegatedPrefix1->description = 'qui';
    $request->publicDelegatedPrefix1->fingerprint = 'laboriosam';
    $request->publicDelegatedPrefix1->id = 'neque';
    $request->publicDelegatedPrefix1->ipCidrRange = 'ab';
    $request->publicDelegatedPrefix1->isLiveMigration = false;
    $request->publicDelegatedPrefix1->kind = 'quisquam';
    $request->publicDelegatedPrefix1->name = 'Adrienne Bayer DVM';
    $request->publicDelegatedPrefix1->parentPrefix = 'molestias';
    $request->publicDelegatedPrefix1->publicDelegatedSubPrefixs = [
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
    ];
    $request->publicDelegatedPrefix1->region = 'dolorem';
    $request->publicDelegatedPrefix1->selfLink = 'sapiente';
    $request->publicDelegatedPrefix1->status = PublicDelegatedPrefixStatusEnum::INITIALIZING;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'aspernatur';
    $request->key = 'nemo';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->publicDelegatedPrefixPathParameter = 'non';
    $request->quotaUser = 'repudiandae';
    $request->region = 'quae';
    $request->requestId = 'tempore';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'deserunt';
    $request->userIp = 'non';

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
