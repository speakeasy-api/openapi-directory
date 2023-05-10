# publicAdvertisedPrefixes

### Available Operations

* [computePublicAdvertisedPrefixesAnnounce](#computepublicadvertisedprefixesannounce) - Announces the specified PublicAdvertisedPrefix
* [computePublicAdvertisedPrefixesDelete](#computepublicadvertisedprefixesdelete) - Deletes the specified PublicAdvertisedPrefix
* [computePublicAdvertisedPrefixesGet](#computepublicadvertisedprefixesget) - Returns the specified PublicAdvertisedPrefix resource.
* [computePublicAdvertisedPrefixesInsert](#computepublicadvertisedprefixesinsert) - Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.
* [computePublicAdvertisedPrefixesList](#computepublicadvertisedprefixeslist) - Lists the PublicAdvertisedPrefixes for a project.
* [computePublicAdvertisedPrefixesPatch](#computepublicadvertisedprefixespatch) - Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computePublicAdvertisedPrefixesWithdraw](#computepublicadvertisedprefixeswithdraw) - Withdraws the specified PublicAdvertisedPrefix

## computePublicAdvertisedPrefixesAnnounce

Announces the specified PublicAdvertisedPrefix

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesAnnounceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesAnnounceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesAnnounceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesAnnounceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicAdvertisedPrefixesAnnounceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'possimus';
    $request->key = 'quasi';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->publicAdvertisedPrefix = 'nihil';
    $request->quotaUser = 'consectetur';
    $request->requestId = 'illum';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'non';
    $request->userIp = 'libero';

    $requestSecurity = new ComputePublicAdvertisedPrefixesAnnounceSecurity();
    $requestSecurity->option1 = new ComputePublicAdvertisedPrefixesAnnounceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicAdvertisedPrefixes->computePublicAdvertisedPrefixesAnnounce($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->fields = 'tenetur';
    $request->key = 'explicabo';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->publicAdvertisedPrefix = 'sequi';
    $request->quotaUser = 'magnam';
    $request->requestId = 'mollitia';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'harum';
    $request->userIp = 'doloremque';

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
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'expedita';
    $request->key = 'laboriosam';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->project = 'molestias';
    $request->publicAdvertisedPrefix = 'corporis';
    $request->quotaUser = 'facere';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'est';
    $request->userIp = 'odit';

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
use \OpenAPI\OpenAPI\Models\Shared\PublicAdvertisedPrefixPdpScopeEnum;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->publicAdvertisedPrefix = new PublicAdvertisedPrefix();
    $request->publicAdvertisedPrefix->creationTimestamp = 'est';
    $request->publicAdvertisedPrefix->description = 'fuga';
    $request->publicAdvertisedPrefix->dnsVerificationIp = 'est';
    $request->publicAdvertisedPrefix->fingerprint = 'quae';
    $request->publicAdvertisedPrefix->id = 'debitis';
    $request->publicAdvertisedPrefix->ipCidrRange = 'quasi';
    $request->publicAdvertisedPrefix->kind = 'voluptas';
    $request->publicAdvertisedPrefix->name = 'Harold Hilll';
    $request->publicAdvertisedPrefix->pdpScope = PublicAdvertisedPrefixPdpScopeEnum::GLOBAL_AND_REGIONAL;
    $request->publicAdvertisedPrefix->publicDelegatedPrefixs = [
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
    ];
    $request->publicAdvertisedPrefix->selfLink = 'aspernatur';
    $request->publicAdvertisedPrefix->selfLinkWithId = 'recusandae';
    $request->publicAdvertisedPrefix->sharedSecret = 'repudiandae';
    $request->publicAdvertisedPrefix->status = PublicAdvertisedPrefixStatusEnum::INITIAL;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->fields = 'voluptatem';
    $request->key = 'corporis';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'doloremque';
    $request->requestId = 'consectetur';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'dolorem';

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
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'rem';
    $request->filter = 'sit';
    $request->key = 'cumque';
    $request->maxResults = 685537;
    $request->oauthToken = 'ratione';
    $request->orderBy = 'in';
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'ab';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'ducimus';
    $request->userIp = 'voluptatum';

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
use \OpenAPI\OpenAPI\Models\Shared\PublicAdvertisedPrefixPdpScopeEnum;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->publicAdvertisedPrefix1 = new PublicAdvertisedPrefix();
    $request->publicAdvertisedPrefix1->creationTimestamp = 'eaque';
    $request->publicAdvertisedPrefix1->description = 'sequi';
    $request->publicAdvertisedPrefix1->dnsVerificationIp = 'fugit';
    $request->publicAdvertisedPrefix1->fingerprint = 'deserunt';
    $request->publicAdvertisedPrefix1->id = 'porro';
    $request->publicAdvertisedPrefix1->ipCidrRange = 'amet';
    $request->publicAdvertisedPrefix1->kind = 'amet';
    $request->publicAdvertisedPrefix1->name = 'Frances Kohler';
    $request->publicAdvertisedPrefix1->pdpScope = PublicAdvertisedPrefixPdpScopeEnum::GLOBAL;
    $request->publicAdvertisedPrefix1->publicDelegatedPrefixs = [
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
    ];
    $request->publicAdvertisedPrefix1->selfLink = 'quibusdam';
    $request->publicAdvertisedPrefix1->selfLinkWithId = 'nihil';
    $request->publicAdvertisedPrefix1->sharedSecret = 'provident';
    $request->publicAdvertisedPrefix1->status = PublicAdvertisedPrefixStatusEnum::VALIDATED;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'distinctio';
    $request->key = 'error';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->publicAdvertisedPrefixPathParameter = 'corrupti';
    $request->quotaUser = 'deleniti';
    $request->requestId = 'possimus';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'ipsum';

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

## computePublicAdvertisedPrefixesWithdraw

Withdraws the specified PublicAdvertisedPrefix

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesWithdrawRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesWithdrawSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesWithdrawSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePublicAdvertisedPrefixesWithdrawSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePublicAdvertisedPrefixesWithdrawRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'inventore';
    $request->fields = 'eligendi';
    $request->key = 'optio';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->publicAdvertisedPrefix = 'labore';
    $request->quotaUser = 'dicta';
    $request->requestId = 'quisquam';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'enim';

    $requestSecurity = new ComputePublicAdvertisedPrefixesWithdrawSecurity();
    $requestSecurity->option1 = new ComputePublicAdvertisedPrefixesWithdrawSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->publicAdvertisedPrefixes->computePublicAdvertisedPrefixesWithdraw($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
