# domains

### Available Operations

* [gmailpostmastertoolsDomainsList](#gmailpostmastertoolsdomainslist) - Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.
* [gmailpostmastertoolsDomainsTrafficStatsGet](#gmailpostmastertoolsdomainstrafficstatsget) - Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
* [gmailpostmastertoolsDomainsTrafficStatsList](#gmailpostmastertoolsdomainstrafficstatslist) - List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.

## gmailpostmastertoolsDomainsList

Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GmailpostmastertoolsDomainsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GmailpostmastertoolsDomainsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GmailpostmastertoolsDomainsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->pageSize = 477665;
    $request->pageToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new GmailpostmastertoolsDomainsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domains->gmailpostmastertoolsDomainsList($request, $requestSecurity);

    if ($response->listDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gmailpostmastertoolsDomainsTrafficStatsGet

Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GmailpostmastertoolsDomainsTrafficStatsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GmailpostmastertoolsDomainsTrafficStatsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GmailpostmastertoolsDomainsTrafficStatsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->name = 'Iris Aufderhar';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new GmailpostmastertoolsDomainsTrafficStatsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domains->gmailpostmastertoolsDomainsTrafficStatsGet($request, $requestSecurity);

    if ($response->trafficStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gmailpostmastertoolsDomainsTrafficStatsList

List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GmailpostmastertoolsDomainsTrafficStatsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GmailpostmastertoolsDomainsTrafficStatsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GmailpostmastertoolsDomainsTrafficStatsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->endDateDay = 800911;
    $request->endDateMonth = 461479;
    $request->endDateYear = 520478;
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->pageSize = 720633;
    $request->pageToken = 'officia';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->startDateDay = 537373;
    $request->startDateMonth = 944669;
    $request->startDateYear = 758616;
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new GmailpostmastertoolsDomainsTrafficStatsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domains->gmailpostmastertoolsDomainsTrafficStatsList($request, $requestSecurity);

    if ($response->listTrafficStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
