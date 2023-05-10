# sitemaps

### Available Operations

* [webmastersSitemapsDelete](#webmasterssitemapsdelete) - Deletes a sitemap from this site.
* [webmastersSitemapsGet](#webmasterssitemapsget) - Retrieves information about a specific sitemap.
* [webmastersSitemapsList](#webmasterssitemapslist) - Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
* [webmastersSitemapsSubmit](#webmasterssitemapssubmit) - Submits a sitemap for a site.

## webmastersSitemapsDelete

Deletes a sitemap from this site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitemapsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->feedpath = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->siteUrl = 'quod';
    $request->userIp = 'quod';

    $requestSecurity = new WebmastersSitemapsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sitemaps->webmastersSitemapsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webmastersSitemapsGet

Retrieves information about a specific sitemap.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitemapsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->feedpath = 'esse';
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->siteUrl = 'nam';
    $request->userIp = 'officia';

    $requestSecurity = new WebmastersSitemapsGetSecurity();
    $requestSecurity->option1 = new WebmastersSitemapsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sitemaps->webmastersSitemapsGet($request, $requestSecurity);

    if ($response->wmxSitemap !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webmastersSitemapsList

Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitemapsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->siteUrl = 'optio';
    $request->sitemapIndex = 'totam';
    $request->userIp = 'beatae';

    $requestSecurity = new WebmastersSitemapsListSecurity();
    $requestSecurity->option1 = new WebmastersSitemapsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sitemaps->webmastersSitemapsList($request, $requestSecurity);

    if ($response->sitemapsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webmastersSitemapsSubmit

Submits a sitemap for a site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitemapsSubmitRequest();
    $request->alt = AltEnum::JSON;
    $request->feedpath = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->siteUrl = 'cum';
    $request->userIp = 'esse';

    $requestSecurity = new WebmastersSitemapsSubmitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sitemaps->webmastersSitemapsSubmit($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
