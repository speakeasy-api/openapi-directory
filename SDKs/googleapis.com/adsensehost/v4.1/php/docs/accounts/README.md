# accounts

### Available Operations

* [adsensehostAccountsAdclientsGet](#adsensehostaccountsadclientsget) - Get information about one of the ad clients in the specified publisher's AdSense account.
* [adsensehostAccountsAdclientsList](#adsensehostaccountsadclientslist) - List all hosted ad clients in the specified hosted account.
* [adsensehostAccountsAdunitsDelete](#adsensehostaccountsadunitsdelete) - Delete the specified ad unit from the specified publisher AdSense account.
* [adsensehostAccountsAdunitsGet](#adsensehostaccountsadunitsget) - Get the specified host ad unit in this AdSense account.
* [adsensehostAccountsAdunitsGetAdCode](#adsensehostaccountsadunitsgetadcode) - Get ad code for the specified ad unit, attaching the specified host custom channels.
* [adsensehostAccountsAdunitsInsert](#adsensehostaccountsadunitsinsert) - Insert the supplied ad unit into the specified publisher AdSense account.
* [adsensehostAccountsAdunitsList](#adsensehostaccountsadunitslist) - List all ad units in the specified publisher's AdSense account.
* [adsensehostAccountsAdunitsPatch](#adsensehostaccountsadunitspatch) - Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
* [adsensehostAccountsAdunitsUpdate](#adsensehostaccountsadunitsupdate) - Update the supplied ad unit in the specified publisher AdSense account.
* [adsensehostAccountsGet](#adsensehostaccountsget) - Get information about the selected associated AdSense account.
* [adsensehostAccountsList](#adsensehostaccountslist) - List hosted accounts associated with this AdSense account by ad client id.
* [adsensehostAccountsReportsGenerate](#adsensehostaccountsreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

## adsensehostAccountsAdclientsGet

Get information about one of the ad clients in the specified publisher's AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdclientsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdclientsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsAdclientsGetRequest();
    $request->accountId = 'vel';
    $request->adClientId = 'error';
    $request->alt = AltEnum::JSON;
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->userIp = 'ipsa';

    $requestSecurity = new AdsensehostAccountsAdclientsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsAdclientsGet($request, $requestSecurity);

    if ($response->adClient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsAdclientsList

List all hosted ad clients in the specified hosted account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdclientsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdclientsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsAdclientsListRequest();
    $request->accountId = 'delectus';
    $request->alt = AltEnum::CSV;
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->maxResults = 791725;
    $request->oauthToken = 'placeat';
    $request->pageToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->userIp = 'excepturi';

    $requestSecurity = new AdsensehostAccountsAdclientsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsAdclientsList($request, $requestSecurity);

    if ($response->adClients !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsAdunitsDelete

Delete the specified ad unit from the specified publisher AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsAdunitsDeleteRequest();
    $request->accountId = 'nisi';
    $request->adClientId = 'recusandae';
    $request->adUnitId = 'temporibus';
    $request->alt = AltEnum::CSV;
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->userIp = 'ipsam';

    $requestSecurity = new AdsensehostAccountsAdunitsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsAdunitsDelete($request, $requestSecurity);

    if ($response->adUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsAdunitsGet

Get the specified host ad unit in this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsAdunitsGetRequest();
    $request->accountId = 'repellendus';
    $request->adClientId = 'sapiente';
    $request->adUnitId = 'quo';
    $request->alt = AltEnum::CSV;
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->userIp = 'quod';

    $requestSecurity = new AdsensehostAccountsAdunitsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsAdunitsGet($request, $requestSecurity);

    if ($response->adUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsAdunitsGetAdCode

Get ad code for the specified ad unit, attaching the specified host custom channels.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsGetAdCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsGetAdCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsAdunitsGetAdCodeRequest();
    $request->accountId = 'quod';
    $request->adClientId = 'esse';
    $request->adUnitId = 'totam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'dolorum';
    $request->hostCustomChannelId = [
        'nam',
    ];
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->userIp = 'deleniti';

    $requestSecurity = new AdsensehostAccountsAdunitsGetAdCodeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsAdunitsGetAdCode($request, $requestSecurity);

    if ($response->adCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsAdunitsInsert

Insert the supplied ad unit into the specified publisher AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdUnit;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitContentAdsSettings;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitContentAdsSettingsBackupOption;
use \OpenAPI\OpenAPI\Models\Shared\AdStyle;
use \OpenAPI\OpenAPI\Models\Shared\AdStyleColors;
use \OpenAPI\OpenAPI\Models\Shared\AdStyleFont;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitMobileContentAdsSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsAdunitsInsertRequest();
    $request->adUnit = new AdUnit();
    $request->adUnit->code = 'hic';
    $request->adUnit->contentAdsSettings = new AdUnitContentAdsSettings();
    $request->adUnit->contentAdsSettings->backupOption = new AdUnitContentAdsSettingsBackupOption();
    $request->adUnit->contentAdsSettings->backupOption->color = 'optio';
    $request->adUnit->contentAdsSettings->backupOption->type = 'totam';
    $request->adUnit->contentAdsSettings->backupOption->url = 'beatae';
    $request->adUnit->contentAdsSettings->size = 'commodi';
    $request->adUnit->contentAdsSettings->type = 'molestiae';
    $request->adUnit->customStyle = new AdStyle();
    $request->adUnit->customStyle->colors = new AdStyleColors();
    $request->adUnit->customStyle->colors->background = 'modi';
    $request->adUnit->customStyle->colors->border = 'qui';
    $request->adUnit->customStyle->colors->text = 'impedit';
    $request->adUnit->customStyle->colors->title = 'Miss';
    $request->adUnit->customStyle->colors->url = 'esse';
    $request->adUnit->customStyle->corners = 'ipsum';
    $request->adUnit->customStyle->font = new AdStyleFont();
    $request->adUnit->customStyle->font->family = 'excepturi';
    $request->adUnit->customStyle->font->size = 'aspernatur';
    $request->adUnit->customStyle->kind = 'perferendis';
    $request->adUnit->id = '5929396f-ea75-496e-b10f-aaa2352c5955';
    $request->adUnit->kind = 'excepturi';
    $request->adUnit->mobileContentAdsSettings = new AdUnitMobileContentAdsSettings();
    $request->adUnit->mobileContentAdsSettings->markupLanguage = 'accusantium';
    $request->adUnit->mobileContentAdsSettings->scriptingLanguage = 'iure';
    $request->adUnit->mobileContentAdsSettings->size = 'culpa';
    $request->adUnit->mobileContentAdsSettings->type = 'doloribus';
    $request->adUnit->name = 'Juan O'Hara';
    $request->adUnit->status = 'consequuntur';
    $request->accountId = 'repellat';
    $request->adClientId = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->fields = 'numquam';
    $request->key = 'commodi';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->userIp = 'velit';

    $requestSecurity = new AdsensehostAccountsAdunitsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsAdunitsInsert($request, $requestSecurity);

    if ($response->adUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsAdunitsList

List all ad units in the specified publisher's AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsAdunitsListRequest();
    $request->accountId = 'error';
    $request->adClientId = 'quia';
    $request->alt = AltEnum::CSV;
    $request->fields = 'vitae';
    $request->includeInactive = false;
    $request->key = 'laborum';
    $request->maxResults = 656330;
    $request->oauthToken = 'enim';
    $request->pageToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->userIp = 'sequi';

    $requestSecurity = new AdsensehostAccountsAdunitsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsAdunitsList($request, $requestSecurity);

    if ($response->adUnits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsAdunitsPatch

Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdUnit;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitContentAdsSettings;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitContentAdsSettingsBackupOption;
use \OpenAPI\OpenAPI\Models\Shared\AdStyle;
use \OpenAPI\OpenAPI\Models\Shared\AdStyleColors;
use \OpenAPI\OpenAPI\Models\Shared\AdStyleFont;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitMobileContentAdsSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsAdunitsPatchRequest();
    $request->adUnit = new AdUnit();
    $request->adUnit->code = 'tenetur';
    $request->adUnit->contentAdsSettings = new AdUnitContentAdsSettings();
    $request->adUnit->contentAdsSettings->backupOption = new AdUnitContentAdsSettingsBackupOption();
    $request->adUnit->contentAdsSettings->backupOption->color = 'ipsam';
    $request->adUnit->contentAdsSettings->backupOption->type = 'id';
    $request->adUnit->contentAdsSettings->backupOption->url = 'possimus';
    $request->adUnit->contentAdsSettings->size = 'aut';
    $request->adUnit->contentAdsSettings->type = 'quasi';
    $request->adUnit->customStyle = new AdStyle();
    $request->adUnit->customStyle->colors = new AdStyleColors();
    $request->adUnit->customStyle->colors->background = 'error';
    $request->adUnit->customStyle->colors->border = 'temporibus';
    $request->adUnit->customStyle->colors->text = 'laborum';
    $request->adUnit->customStyle->colors->title = 'Mr.';
    $request->adUnit->customStyle->colors->url = 'reiciendis';
    $request->adUnit->customStyle->corners = 'voluptatibus';
    $request->adUnit->customStyle->font = new AdStyleFont();
    $request->adUnit->customStyle->font->family = 'vero';
    $request->adUnit->customStyle->font->size = 'nihil';
    $request->adUnit->customStyle->kind = 'praesentium';
    $request->adUnit->id = 'f097b007-4f15-4471-b5e6-e13b99d488e1';
    $request->adUnit->kind = 'repudiandae';
    $request->adUnit->mobileContentAdsSettings = new AdUnitMobileContentAdsSettings();
    $request->adUnit->mobileContentAdsSettings->markupLanguage = 'sint';
    $request->adUnit->mobileContentAdsSettings->scriptingLanguage = 'veritatis';
    $request->adUnit->mobileContentAdsSettings->size = 'itaque';
    $request->adUnit->mobileContentAdsSettings->type = 'incidunt';
    $request->adUnit->name = 'Elizabeth Orn';
    $request->adUnit->status = 'deserunt';
    $request->accountId = 'distinctio';
    $request->adClientId = 'quibusdam';
    $request->adUnitId = 'labore';
    $request->alt = AltEnum::CSV;
    $request->fields = 'qui';
    $request->key = 'aliquid';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->userIp = 'perferendis';

    $requestSecurity = new AdsensehostAccountsAdunitsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsAdunitsPatch($request, $requestSecurity);

    if ($response->adUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsAdunitsUpdate

Update the supplied ad unit in the specified publisher AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdUnit;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitContentAdsSettings;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitContentAdsSettingsBackupOption;
use \OpenAPI\OpenAPI\Models\Shared\AdStyle;
use \OpenAPI\OpenAPI\Models\Shared\AdStyleColors;
use \OpenAPI\OpenAPI\Models\Shared\AdStyleFont;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitMobileContentAdsSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsAdunitsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsAdunitsUpdateRequest();
    $request->adUnit = new AdUnit();
    $request->adUnit->code = 'magni';
    $request->adUnit->contentAdsSettings = new AdUnitContentAdsSettings();
    $request->adUnit->contentAdsSettings->backupOption = new AdUnitContentAdsSettingsBackupOption();
    $request->adUnit->contentAdsSettings->backupOption->color = 'assumenda';
    $request->adUnit->contentAdsSettings->backupOption->type = 'ipsam';
    $request->adUnit->contentAdsSettings->backupOption->url = 'alias';
    $request->adUnit->contentAdsSettings->size = 'fugit';
    $request->adUnit->contentAdsSettings->type = 'dolorum';
    $request->adUnit->customStyle = new AdStyle();
    $request->adUnit->customStyle->colors = new AdStyleColors();
    $request->adUnit->customStyle->colors->background = 'excepturi';
    $request->adUnit->customStyle->colors->border = 'tempora';
    $request->adUnit->customStyle->colors->text = 'facilis';
    $request->adUnit->customStyle->colors->title = 'Miss';
    $request->adUnit->customStyle->colors->url = 'labore';
    $request->adUnit->customStyle->corners = 'delectus';
    $request->adUnit->customStyle->font = new AdStyleFont();
    $request->adUnit->customStyle->font->family = 'eum';
    $request->adUnit->customStyle->font->size = 'non';
    $request->adUnit->customStyle->kind = 'eligendi';
    $request->adUnit->id = '969e9a3e-fa77-4dfb-94cd-66ae395efb9b';
    $request->adUnit->kind = 'id';
    $request->adUnit->mobileContentAdsSettings = new AdUnitMobileContentAdsSettings();
    $request->adUnit->mobileContentAdsSettings->markupLanguage = 'blanditiis';
    $request->adUnit->mobileContentAdsSettings->scriptingLanguage = 'deleniti';
    $request->adUnit->mobileContentAdsSettings->size = 'sapiente';
    $request->adUnit->mobileContentAdsSettings->type = 'amet';
    $request->adUnit->name = 'Tyler Kassulke';
    $request->adUnit->status = 'molestiae';
    $request->accountId = 'perferendis';
    $request->adClientId = 'nihil';
    $request->alt = AltEnum::CSV;
    $request->fields = 'distinctio';
    $request->key = 'id';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->userIp = 'suscipit';

    $requestSecurity = new AdsensehostAccountsAdunitsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsAdunitsUpdate($request, $requestSecurity);

    if ($response->adUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsGet

Get information about the selected associated AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsGetRequest();
    $request->accountId = 'natus';
    $request->alt = AltEnum::JSON;
    $request->fields = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->userIp = 'magnam';

    $requestSecurity = new AdsensehostAccountsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsGet($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsList

List hosted accounts associated with this AdSense account by ad client id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsListRequest();
    $request->alt = AltEnum::CSV;
    $request->fields = 'excepturi';
    $request->filterAdClientId = [
        'provident',
        'quos',
    ];
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->userIp = 'reiciendis';

    $requestSecurity = new AdsensehostAccountsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsList($request, $requestSecurity);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAccountsReportsGenerate

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsReportsGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAccountsReportsGenerateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAccountsReportsGenerateRequest();
    $request->accountId = 'mollitia';
    $request->alt = AltEnum::CSV;
    $request->dimension = [
        'dolor',
        'necessitatibus',
    ];
    $request->endDate = 'odit';
    $request->fields = 'nemo';
    $request->filter = [
        'iure',
    ];
    $request->key = 'doloribus';
    $request->locale = 'debitis';
    $request->maxResults = 260341;
    $request->metric = [
        'deleniti',
        'facilis',
        'in',
        'architecto',
    ];
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->sort = [
        'expedita',
        'nihil',
    ];
    $request->startDate = 'repellat';
    $request->startIndex = 841140;
    $request->userIp = 'sed';

    $requestSecurity = new AdsensehostAccountsReportsGenerateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsensehostAccountsReportsGenerate($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
