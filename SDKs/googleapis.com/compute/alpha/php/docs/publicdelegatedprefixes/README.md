# publicDelegatedPrefixes

### Available Operations

* [computePublicDelegatedPrefixesAggregatedList](#computepublicdelegatedprefixesaggregatedlist) - Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.
* [computePublicDelegatedPrefixesAnnounce](#computepublicdelegatedprefixesannounce) - Announces the specified PublicDelegatedPrefix in the given region.
* [computePublicDelegatedPrefixesDelete](#computepublicdelegatedprefixesdelete) - Deletes the specified PublicDelegatedPrefix in the given region.
* [computePublicDelegatedPrefixesGet](#computepublicdelegatedprefixesget) - Returns the specified PublicDelegatedPrefix resource in the given region.
* [computePublicDelegatedPrefixesInsert](#computepublicdelegatedprefixesinsert) - Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.
* [computePublicDelegatedPrefixesList](#computepublicdelegatedprefixeslist) - Lists the PublicDelegatedPrefixes for a project in the given region.
* [computePublicDelegatedPrefixesPatch](#computepublicdelegatedprefixespatch) - Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computePublicDelegatedPrefixesWithdraw](#computepublicdelegatedprefixeswithdraw) - Withdraws the specified PublicDelegatedPrefix in the given region.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'eius';
    $request->filter = 'doloribus';
    $request->includeAllScopes = false;
    $request->key = 'doloremque';
    $request->maxResults = 632678;
    $request->oauthToken = 'voluptate';
    $request->orderBy = 'incidunt';
    $request->pageToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'doloribus';
    $request->quotaUser = 'cum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'deserunt';
    $request->userIp = 'distinctio';

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

## computePublicDelegatedPrefixesAnnounce

Announces the specified PublicDelegatedPrefix in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesAnnounceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesAnnounceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesAnnounceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesAnnounceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicDelegatedPrefixesAnnounceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'ipsum';
    $request->key = 'deserunt';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->publicDelegatedPrefix = 'saepe';
    $request->quotaUser = 'esse';
    $request->region = 'commodi';
    $request->requestId = 'velit';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'minima';

    $requestSecurity = new ComputePublicDelegatedPrefixesAnnounceSecurity();
    $requestSecurity->option1 = new ComputePublicDelegatedPrefixesAnnounceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicDelegatedPrefixes->computePublicDelegatedPrefixesAnnounce($request, $requestSecurity);

    if ($response->operation !== null) {
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
    $request->accessToken = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corrupti';
    $request->fields = 'tempore';
    $request->key = 'nam';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->publicDelegatedPrefix = 'natus';
    $request->quotaUser = 'dolore';
    $request->region = 'eius';
    $request->requestId = 'minima';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'recusandae';
    $request->userIp = 'nobis';

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
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'est';
    $request->key = 'beatae';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->publicDelegatedPrefix = 'qui';
    $request->quotaUser = 'nisi';
    $request->region = 'rerum';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'maxime';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->publicDelegatedPrefix = new PublicDelegatedPrefix();
    $request->publicDelegatedPrefix->creationTimestamp = 'dolor';
    $request->publicDelegatedPrefix->description = 'commodi';
    $request->publicDelegatedPrefix->fingerprint = 'ea';
    $request->publicDelegatedPrefix->id = 'asperiores';
    $request->publicDelegatedPrefix->ipCidrRange = 'facere';
    $request->publicDelegatedPrefix->isLiveMigration = false;
    $request->publicDelegatedPrefix->kind = 'maxime';
    $request->publicDelegatedPrefix->name = 'Juan DuBuque';
    $request->publicDelegatedPrefix->parentPrefix = 'voluptatum';
    $request->publicDelegatedPrefix->publicDelegatedSubPrefixs = [
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
    ];
    $request->publicDelegatedPrefix->region = 'quisquam';
    $request->publicDelegatedPrefix->selfLink = 'et';
    $request->publicDelegatedPrefix->selfLinkWithId = 'expedita';
    $request->publicDelegatedPrefix->status = PublicDelegatedPrefixStatusEnum::DELETING;
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'laudantium';
    $request->key = 'atque';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->project = 'fugiat';
    $request->quotaUser = 'omnis';
    $request->region = 'officiis';
    $request->requestId = 'hic';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'fugit';

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
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'voluptatem';
    $request->filter = 'culpa';
    $request->key = 'beatae';
    $request->maxResults = 200298;
    $request->oauthToken = 'deserunt';
    $request->orderBy = 'nulla';
    $request->pageToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'consequuntur';
    $request->region = 'dolore';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'voluptatum';

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
    $request->publicDelegatedPrefix1->creationTimestamp = 'sapiente';
    $request->publicDelegatedPrefix1->description = 'at';
    $request->publicDelegatedPrefix1->fingerprint = 'qui';
    $request->publicDelegatedPrefix1->id = 'consectetur';
    $request->publicDelegatedPrefix1->ipCidrRange = 'eius';
    $request->publicDelegatedPrefix1->isLiveMigration = false;
    $request->publicDelegatedPrefix1->kind = 'dicta';
    $request->publicDelegatedPrefix1->name = 'Nina Mertz';
    $request->publicDelegatedPrefix1->parentPrefix = 'quam';
    $request->publicDelegatedPrefix1->publicDelegatedSubPrefixs = [
        new PublicDelegatedPrefixPublicDelegatedSubPrefix(),
    ];
    $request->publicDelegatedPrefix1->region = 'praesentium';
    $request->publicDelegatedPrefix1->selfLink = 'nihil';
    $request->publicDelegatedPrefix1->selfLinkWithId = 'unde';
    $request->publicDelegatedPrefix1->status = PublicDelegatedPrefixStatusEnum::READY_TO_ANNOUNCE;
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eveniet';
    $request->fields = 'voluptatum';
    $request->key = 'rerum';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->publicDelegatedPrefixPathParameter = 'tempore';
    $request->quotaUser = 'mollitia';
    $request->region = 'libero';
    $request->requestId = 'tempore';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'ut';

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

## computePublicDelegatedPrefixesWithdraw

Withdraws the specified PublicDelegatedPrefix in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesWithdrawRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesWithdrawSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesWithdrawSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicDelegatedPrefixesWithdrawSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicDelegatedPrefixesWithdrawRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->fields = 'excepturi';
    $request->key = 'ipsa';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->publicDelegatedPrefix = 'inventore';
    $request->quotaUser = 'harum';
    $request->region = 'quidem';
    $request->requestId = 'unde';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'adipisci';

    $requestSecurity = new ComputePublicDelegatedPrefixesWithdrawSecurity();
    $requestSecurity->option1 = new ComputePublicDelegatedPrefixesWithdrawSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicDelegatedPrefixes->computePublicDelegatedPrefixesWithdraw($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
