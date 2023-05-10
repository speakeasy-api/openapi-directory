# sites

### Available Operations

* [webmastersSitesAdd](#webmasterssitesadd) -  Adds a site to the set of the user's sites in Search Console.
* [webmastersSitesDelete](#webmasterssitesdelete) -  Removes a site from the set of the user's Search Console sites.
* [webmastersSitesGet](#webmasterssitesget) -  Retrieves information about specific site.
* [webmastersSitesList](#webmasterssiteslist) -  Lists the user's Search Console sites.

## webmastersSitesAdd

 Adds a site to the set of the user's sites in Search Console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitesAddRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'nemo';
    $request->key = 'minima';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->siteUrl = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new WebmastersSitesAddSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->webmastersSitesAdd($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webmastersSitesDelete

 Removes a site from the set of the user's Search Console sites.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'culpa';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->siteUrl = 'occaecati';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new WebmastersSitesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->webmastersSitesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webmastersSitesGet

 Retrieves information about specific site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->siteUrl = 'animi';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new WebmastersSitesGetSecurity();
    $requestSecurity->option1 = new WebmastersSitesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->webmastersSitesGet($request, $requestSecurity);

    if ($response->wmxSite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webmastersSitesList

 Lists the user's Search Console sites.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'id';
    $request->key = 'possimus';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new WebmastersSitesListSecurity();
    $requestSecurity->option1 = new WebmastersSitesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->webmastersSitesList($request, $requestSecurity);

    if ($response->sitesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
