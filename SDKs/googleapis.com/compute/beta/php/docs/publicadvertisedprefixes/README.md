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
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veniam';
    $request->fields = 'illo';
    $request->key = 'illo';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->publicAdvertisedPrefix = 'fugit';
    $request->quotaUser = 'optio';
    $request->requestId = 'quo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'ducimus';
    $request->userIp = 'tenetur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'rerum';
    $request->key = 'beatae';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->publicAdvertisedPrefix = 'molestias';
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'cupiditate';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->publicAdvertisedPrefix = new PublicAdvertisedPrefix();
    $request->publicAdvertisedPrefix->creationTimestamp = 'occaecati';
    $request->publicAdvertisedPrefix->description = 'pariatur';
    $request->publicAdvertisedPrefix->dnsVerificationIp = 'quaerat';
    $request->publicAdvertisedPrefix->fingerprint = 'itaque';
    $request->publicAdvertisedPrefix->id = 'itaque';
    $request->publicAdvertisedPrefix->ipCidrRange = 'animi';
    $request->publicAdvertisedPrefix->kind = 'totam';
    $request->publicAdvertisedPrefix->name = 'Alma Hickle';
    $request->publicAdvertisedPrefix->publicDelegatedPrefixs = [
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
    ];
    $request->publicAdvertisedPrefix->selfLink = 'at';
    $request->publicAdvertisedPrefix->sharedSecret = 'modi';
    $request->publicAdvertisedPrefix->status = PublicAdvertisedPrefixStatusEnum::VALIDATED;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'quas';
    $request->key = 'quidem';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'hic';
    $request->requestId = 'aspernatur';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'tenetur';

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
    $request->callback = 'ea';
    $request->fields = 'molestiae';
    $request->filter = 'accusamus';
    $request->key = 'labore';
    $request->maxResults = 419686;
    $request->oauthToken = 'placeat';
    $request->orderBy = 'corporis';
    $request->pageToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'dolores';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'repellat';
    $request->userIp = 'id';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->publicAdvertisedPrefix1 = new PublicAdvertisedPrefix();
    $request->publicAdvertisedPrefix1->creationTimestamp = 'ad';
    $request->publicAdvertisedPrefix1->description = 'corrupti';
    $request->publicAdvertisedPrefix1->dnsVerificationIp = 'temporibus';
    $request->publicAdvertisedPrefix1->fingerprint = 'minus';
    $request->publicAdvertisedPrefix1->id = 'voluptates';
    $request->publicAdvertisedPrefix1->ipCidrRange = 'repellat';
    $request->publicAdvertisedPrefix1->kind = 'sed';
    $request->publicAdvertisedPrefix1->name = 'Gail Schiller';
    $request->publicAdvertisedPrefix1->publicDelegatedPrefixs = [
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
        new PublicAdvertisedPrefixPublicDelegatedPrefix(),
    ];
    $request->publicAdvertisedPrefix1->selfLink = 'tempore';
    $request->publicAdvertisedPrefix1->sharedSecret = 'natus';
    $request->publicAdvertisedPrefix1->status = PublicAdvertisedPrefixStatusEnum::PTR_CONFIGURED;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'vitae';
    $request->key = 'error';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'id';
    $request->publicAdvertisedPrefixPathParameter = 'nobis';
    $request->quotaUser = 'vero';
    $request->requestId = 'excepturi';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'harum';
    $request->userIp = 'quisquam';

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
