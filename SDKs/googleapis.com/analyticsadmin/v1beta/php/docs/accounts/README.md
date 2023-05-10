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

    if ($response->googleAnalyticsAdminV1betaListAccountsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountsProvisionAccountTicketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminAccountsProvisionAccountTicketRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1betaProvisionAccountTicketRequestInput = new GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput();
    $request->googleAnalyticsAdminV1betaProvisionAccountTicketRequestInput->account = new GoogleAnalyticsAdminV1betaAccountInput();
    $request->googleAnalyticsAdminV1betaProvisionAccountTicketRequestInput->account->displayName = 'odit';
    $request->googleAnalyticsAdminV1betaProvisionAccountTicketRequestInput->account->regionCode = 'at';
    $request->googleAnalyticsAdminV1betaProvisionAccountTicketRequestInput->redirectUri = 'at';
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

    if ($response->googleAnalyticsAdminV1betaProvisionAccountTicketResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountsSearchChangeHistoryEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminAccountsSearchChangeHistoryEventsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest = new GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest();
    $request->googleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest->action = [
        GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum::UPDATED,
        GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum::ACTION_TYPE_UNSPECIFIED,
        GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum::UPDATED,
    ];
    $request->googleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest->actorEmail = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->googleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest->earliestChangeTime = 'molestiae';
    $request->googleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest->latestChangeTime = 'modi';
    $request->googleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest->pageSize = 186332;
    $request->googleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest->pageToken = 'impedit';
    $request->googleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest->property = 'cum';
    $request->googleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest->resourceType = [
        GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum::PROPERTY,
        GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum::MEASUREMENT_PROTOCOL_SECRET,
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

    if ($response->googleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
