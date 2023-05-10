# provisioning

### Available Operations

* [analyticsProvisioningCreateAccountTicket](#analyticsprovisioningcreateaccountticket) - Creates an account ticket.
* [analyticsProvisioningCreateAccountTree](#analyticsprovisioningcreateaccounttree) - Provision account.

## analyticsProvisioningCreateAccountTicket

Creates an account ticket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsProvisioningCreateAccountTicketRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountTicketInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountChildLink;
use \OpenAPI\OpenAPI\Models\Shared\ProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\ProfileChildLink;
use \OpenAPI\OpenAPI\Models\Shared\ProfileParentLink;
use \OpenAPI\OpenAPI\Models\Shared\WebpropertyInput;
use \OpenAPI\OpenAPI\Models\Shared\WebpropertyChildLink;
use \OpenAPI\OpenAPI\Models\Shared\WebpropertyParentLink;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsProvisioningCreateAccountTicketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsProvisioningCreateAccountTicketRequest();
    $request->accountTicketInput = new AccountTicketInput();
    $request->accountTicketInput->account = new AccountInput();
    $request->accountTicketInput->account->childLink = new AccountChildLink();
    $request->accountTicketInput->account->childLink->href = 'a';
    $request->accountTicketInput->account->childLink->type = 'beatae';
    $request->accountTicketInput->account->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-01T12:16:18.414Z');
    $request->accountTicketInput->account->id = 'dea1026d-541a-44d1-90fe-b21780bccc0d';
    $request->accountTicketInput->account->kind = 'distinctio';
    $request->accountTicketInput->account->name = 'Sammy Stark';
    $request->accountTicketInput->account->selfLink = 'laudantium';
    $request->accountTicketInput->account->starred = false;
    $request->accountTicketInput->account->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T19:44:10.347Z');
    $request->accountTicketInput->id = '08fb4e39-1e6b-4c15-8c4c-4e54599ea342';
    $request->accountTicketInput->kind = 'explicabo';
    $request->accountTicketInput->profile = new ProfileInput();
    $request->accountTicketInput->profile->accountId = 'suscipit';
    $request->accountTicketInput->profile->botFilteringEnabled = false;
    $request->accountTicketInput->profile->childLink = new ProfileChildLink();
    $request->accountTicketInput->profile->childLink->href = 'ipsa';
    $request->accountTicketInput->profile->childLink->type = 'eveniet';
    $request->accountTicketInput->profile->currency = 'sint';
    $request->accountTicketInput->profile->defaultPage = 'nobis';
    $request->accountTicketInput->profile->eCommerceTracking = false;
    $request->accountTicketInput->profile->enhancedECommerceTracking = false;
    $request->accountTicketInput->profile->excludeQueryParameters = 'qui';
    $request->accountTicketInput->profile->id = '00ce78a1-bd8f-4b7a-8a11-6ce723d4097f';
    $request->accountTicketInput->profile->name = 'Philip Beier';
    $request->accountTicketInput->profile->parentLink = new ProfileParentLink();
    $request->accountTicketInput->profile->parentLink->href = 'deserunt';
    $request->accountTicketInput->profile->parentLink->type = 'hic';
    $request->accountTicketInput->profile->siteSearchCategoryParameters = 'ducimus';
    $request->accountTicketInput->profile->siteSearchQueryParameters = 'consequuntur';
    $request->accountTicketInput->profile->starred = false;
    $request->accountTicketInput->profile->stripSiteSearchCategoryParameters = false;
    $request->accountTicketInput->profile->stripSiteSearchQueryParameters = false;
    $request->accountTicketInput->profile->timezone = 'ipsam';
    $request->accountTicketInput->profile->type = 'libero';
    $request->accountTicketInput->profile->websiteUrl = 'quia';
    $request->accountTicketInput->redirectUri = 'omnis';
    $request->accountTicketInput->webproperty = new WebpropertyInput();
    $request->accountTicketInput->webproperty->accountId = 'dicta';
    $request->accountTicketInput->webproperty->childLink = new WebpropertyChildLink();
    $request->accountTicketInput->webproperty->childLink->href = 'qui';
    $request->accountTicketInput->webproperty->childLink->type = 'explicabo';
    $request->accountTicketInput->webproperty->dataRetentionResetOnNewActivity = false;
    $request->accountTicketInput->webproperty->dataRetentionTtl = 'consequatur';
    $request->accountTicketInput->webproperty->defaultProfileId = 'amet';
    $request->accountTicketInput->webproperty->id = '0d83f5ae-b779-49d2-ae8c-1f8493825fdc';
    $request->accountTicketInput->webproperty->industryVertical = 'quaerat';
    $request->accountTicketInput->webproperty->name = 'Jacquelyn Lueilwitz';
    $request->accountTicketInput->webproperty->parentLink = new WebpropertyParentLink();
    $request->accountTicketInput->webproperty->parentLink->href = 'maxime';
    $request->accountTicketInput->webproperty->parentLink->type = 'sed';
    $request->accountTicketInput->webproperty->starred = false;
    $request->accountTicketInput->webproperty->websiteUrl = 'minus';
    $request->alt = AltEnum::JSON;
    $request->fields = 'consequuntur';
    $request->key = 'possimus';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->userIp = 'aliquam';

    $requestSecurity = new AnalyticsProvisioningCreateAccountTicketSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->provisioning->analyticsProvisioningCreateAccountTicket($request, $requestSecurity);

    if ($response->accountTicket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsProvisioningCreateAccountTree

Provision account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsProvisioningCreateAccountTreeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountTreeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsProvisioningCreateAccountTreeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsProvisioningCreateAccountTreeRequest();
    $request->accountTreeRequest = new AccountTreeRequest();
    $request->accountTreeRequest->accountName = 'eligendi';
    $request->accountTreeRequest->kind = 'hic';
    $request->accountTreeRequest->profileName = 'quo';
    $request->accountTreeRequest->timezone = 'illo';
    $request->accountTreeRequest->webpropertyName = 'nobis';
    $request->accountTreeRequest->websiteUrl = 'esse';
    $request->alt = AltEnum::JSON;
    $request->fields = 'nisi';
    $request->key = 'explicabo';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->userIp = 'reiciendis';

    $requestSecurity = new AnalyticsProvisioningCreateAccountTreeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->provisioning->analyticsProvisioningCreateAccountTree($request, $requestSecurity);

    if ($response->accountTreeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
