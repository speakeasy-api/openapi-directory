# webResource

### Available Operations

* [siteVerificationWebResourceDelete](#siteverificationwebresourcedelete) - Relinquish ownership of a website or domain.
* [siteVerificationWebResourceGet](#siteverificationwebresourceget) - Get the most current data for a website or domain.
* [siteVerificationWebResourceGetToken](#siteverificationwebresourcegettoken) - Get a verification token for placing on a website or domain.
* [siteVerificationWebResourceInsert](#siteverificationwebresourceinsert) - Attempt verification of a website or domain.
* [siteVerificationWebResourceList](#siteverificationwebresourcelist) - Get the list of your verified websites and domains.
* [siteVerificationWebResourcePatch](#siteverificationwebresourcepatch) - Modify the list of owners for your website or domain. This method supports patch semantics.
* [siteVerificationWebResourceUpdate](#siteverificationwebresourceupdate) - Modify the list of owners for your website or domain.

## siteVerificationWebResourceDelete

Relinquish ownership of a website or domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteVerificationWebResourceDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'quo';
    $request->id = '2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392';
    $request->key = 'perferendis';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->userIp = 'sed';

    $requestSecurity = new SiteVerificationWebResourceDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webResource->siteVerificationWebResourceDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## siteVerificationWebResourceGet

Get the most current data for a website or domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteVerificationWebResourceGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'iste';
    $request->id = '396fea75-96eb-410f-aaa2-352c5955907a';
    $request->key = 'doloribus';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->userIp = 'mollitia';

    $requestSecurity = new SiteVerificationWebResourceGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webResource->siteVerificationWebResourceGet($request, $requestSecurity);

    if ($response->siteVerificationWebResourceResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## siteVerificationWebResourceGetToken

Get a verification token for placing on a website or domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceGetTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\SiteVerificationWebResourceGettokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\SiteVerificationWebResourceGettokenRequestSite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceGetTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceGetTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceGetTokenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteVerificationWebResourceGetTokenRequest();
    $request->siteVerificationWebResourceGettokenRequest = new SiteVerificationWebResourceGettokenRequest();
    $request->siteVerificationWebResourceGettokenRequest->site = new SiteVerificationWebResourceGettokenRequestSite();
    $request->siteVerificationWebResourceGettokenRequest->site->identifier = 'dolorem';
    $request->siteVerificationWebResourceGettokenRequest->site->type = 'culpa';
    $request->siteVerificationWebResourceGettokenRequest->verificationMethod = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->userIp = 'commodi';

    $requestSecurity = new SiteVerificationWebResourceGetTokenSecurity();
    $requestSecurity->option1 = new SiteVerificationWebResourceGetTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webResource->siteVerificationWebResourceGetToken($request, $requestSecurity);

    if ($response->siteVerificationWebResourceGettokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## siteVerificationWebResourceInsert

Attempt verification of a website or domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\SiteVerificationWebResourceResource;
use \OpenAPI\OpenAPI\Models\Shared\SiteVerificationWebResourceResourceSite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteVerificationWebResourceInsertRequest();
    $request->siteVerificationWebResourceResource = new SiteVerificationWebResourceResource();
    $request->siteVerificationWebResourceResource->id = '7739251a-a52c-43f5-ad01-9da1ffe78f09';
    $request->siteVerificationWebResourceResource->owners = [
        'cum',
        'perferendis',
    ];
    $request->siteVerificationWebResourceResource->site = new SiteVerificationWebResourceResourceSite();
    $request->siteVerificationWebResourceResource->site->identifier = 'doloremque';
    $request->siteVerificationWebResourceResource->site->type = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->fields = 'ut';
    $request->key = 'maiores';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->userIp = 'dolore';
    $request->verificationMethod = 'iusto';

    $requestSecurity = new SiteVerificationWebResourceInsertSecurity();
    $requestSecurity->option1 = new SiteVerificationWebResourceInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webResource->siteVerificationWebResourceInsert($request, $requestSecurity);

    if ($response->siteVerificationWebResourceResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## siteVerificationWebResourceList

Get the list of your verified websites and domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteVerificationWebResourceListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'dicta';
    $request->key = 'harum';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->userIp = 'commodi';

    $requestSecurity = new SiteVerificationWebResourceListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webResource->siteVerificationWebResourceList($request, $requestSecurity);

    if ($response->siteVerificationWebResourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## siteVerificationWebResourcePatch

Modify the list of owners for your website or domain. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourcePatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\SiteVerificationWebResourceResource;
use \OpenAPI\OpenAPI\Models\Shared\SiteVerificationWebResourceResourceSite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourcePatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteVerificationWebResourcePatchRequest();
    $request->siteVerificationWebResourceResource = new SiteVerificationWebResourceResource();
    $request->siteVerificationWebResourceResource->id = 'e13b99d4-88e1-4e91-a450-ad2abd442698';
    $request->siteVerificationWebResourceResource->owners = [
        'magni',
    ];
    $request->siteVerificationWebResourceResource->site = new SiteVerificationWebResourceResourceSite();
    $request->siteVerificationWebResourceResource->site->identifier = 'assumenda';
    $request->siteVerificationWebResourceResource->site->type = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'alias';
    $request->id = '2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6';
    $request->key = 'aliquid';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->userIp = 'non';

    $requestSecurity = new SiteVerificationWebResourcePatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webResource->siteVerificationWebResourcePatch($request, $requestSecurity);

    if ($response->siteVerificationWebResourceResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## siteVerificationWebResourceUpdate

Modify the list of owners for your website or domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SiteVerificationWebResourceResource;
use \OpenAPI\OpenAPI\Models\Shared\SiteVerificationWebResourceResourceSite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteVerificationWebResourceUpdateRequest();
    $request->siteVerificationWebResourceResource = new SiteVerificationWebResourceResource();
    $request->siteVerificationWebResourceResource->id = '95efb9ba-88f3-4a66-9970-74ba4469b6e2';
    $request->siteVerificationWebResourceResource->owners = [
        'magnam',
    ];
    $request->siteVerificationWebResourceResource->site = new SiteVerificationWebResourceResourceSite();
    $request->siteVerificationWebResourceResource->site->identifier = 'et';
    $request->siteVerificationWebResourceResource->site->type = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->fields = 'ullam';
    $request->id = '9890afa5-63e2-4516-be4c-8b711e5b7fd2';
    $request->key = 'saepe';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->userIp = 'consequuntur';

    $requestSecurity = new SiteVerificationWebResourceUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webResource->siteVerificationWebResourceUpdate($request, $requestSecurity);

    if ($response->siteVerificationWebResourceResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
