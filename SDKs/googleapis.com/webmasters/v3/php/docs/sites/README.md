# sites

### Available Operations

* [webmastersSitesAdd](#webmasterssitesadd) - Adds a site to the set of the user's sites in Search Console.
* [webmastersSitesDelete](#webmasterssitesdelete) - Removes a site from the set of the user's Search Console sites.
* [webmastersSitesGet](#webmasterssitesget) - Retrieves information about specific site.
* [webmastersSitesList](#webmasterssiteslist) - Lists the user's Search Console sites.

## webmastersSitesAdd

Adds a site to the set of the user's sites in Search Console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitesAddRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ipsum';
    $request->key = 'excepturi';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->siteUrl = 'ad';
    $request->userIp = 'natus';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitesDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->siteUrl = 'laboriosam';
    $request->userIp = 'hic';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'saepe';
    $request->key = 'fuga';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->siteUrl = 'iste';
    $request->userIp = 'iure';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitesListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'saepe';
    $request->key = 'quidem';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->userIp = 'reiciendis';

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
