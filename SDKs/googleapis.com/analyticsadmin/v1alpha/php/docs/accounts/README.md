# accounts

### Available Operations

* [analyticsadminAccountsList](#analyticsadminaccountslist) - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* [analyticsadminAccountsProvisionAccountTicket](#analyticsadminaccountsprovisionaccountticket) - Requests a ticket for creating an account.
* [analyticsadminAccountsSearchChangeHistoryEvents](#analyticsadminaccountssearchchangehistoryevents) - Searches through all changes to an account or its children given the specified set of filters.

## analyticsadminAccountsList

Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->oauthToken = 'veritatis';
    $request->pageSize = 648172;
    $request->pageToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->showDeleted = false;
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new AnalyticsadminAccountsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminAccountsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->analyticsadminAccountsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminAccountsProvisionAccountTicket

Requests a ticket for creating an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountsProvisionAccountTicketRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountsProvisionAccountTicketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminAccountsProvisionAccountTicketRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput = new GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput();
    $request->googleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput->account = new GoogleAnalyticsAdminV1alphaAccountInput();
    $request->googleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput->account->displayName = 'odit';
    $request->googleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput->account->regionCode = 'at';
    $request->googleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput->redirectUri = 'at';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new AnalyticsadminAccountsProvisionAccountTicketSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->analyticsadminAccountsProvisionAccountTicket($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaProvisionAccountTicketResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminAccountsSearchChangeHistoryEvents

Searches through all changes to an account or its children given the specified set of filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountsSearchChangeHistoryEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountsSearchChangeHistoryEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminAccountsSearchChangeHistoryEventsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest = new GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest();
    $request->googleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest->action = [
        GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum::UPDATED,
        GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum::ACTION_TYPE_UNSPECIFIED,
        GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum::UPDATED,
    ];
    $request->googleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest->actorEmail = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->googleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest->earliestChangeTime = 'molestiae';
    $request->googleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest->latestChangeTime = 'modi';
    $request->googleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest->pageSize = 186332;
    $request->googleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest->pageToken = 'impedit';
    $request->googleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest->property = 'cum';
    $request->googleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest->resourceType = [
        GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum::GOOGLE_ADS_LINK,
        GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum::DISPLAY_VIDEO360_ADVERTISER_LINK,
    ];
    $request->accessToken = 'aspernatur';
    $request->account = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new AnalyticsadminAccountsSearchChangeHistoryEventsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->analyticsadminAccountsSearchChangeHistoryEvents($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
