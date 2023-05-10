# sitemaps

### Available Operations

* [webmastersSitemapsDelete](#webmasterssitemapsdelete) - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* [webmastersSitemapsGet](#webmasterssitemapsget) - Retrieves information about a specific sitemap.
* [webmastersSitemapsList](#webmasterssitemapslist) -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* [webmastersSitemapsSubmit](#webmasterssitemapssubmit) - Submits a sitemap for a site.

## webmastersSitemapsDelete

Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitemapsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->feedpath = 'officia';
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->siteUrl = 'optio';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'beatae';

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
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitemapsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->feedpath = 'impedit';
    $request->fields = 'cum';
    $request->key = 'esse';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->siteUrl = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ad';

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

 Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitemapsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->siteUrl = 'fuga';
    $request->sitemapIndex = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

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
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSitemapsSubmitRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->feedpath = 'ipsa';
    $request->fields = 'reiciendis';
    $request->key = 'est';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->siteUrl = 'dolores';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'corporis';

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
