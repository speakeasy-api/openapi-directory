# accounts

### Available Operations

* [adsenseAccountsAdclientsAdunitsCreate](#adsenseaccountsadclientsadunitscreate) - Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
* [adsenseAccountsAdclientsAdunitsGetAdcode](#adsenseaccountsadclientsadunitsgetadcode) - Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
* [adsenseAccountsAdclientsAdunitsList](#adsenseaccountsadclientsadunitslist) - Lists all ad units under a specified account and ad client.
* [adsenseAccountsAdclientsAdunitsListLinkedCustomChannels](#adsenseaccountsadclientsadunitslistlinkedcustomchannels) - Lists all the custom channels available for an ad unit.
* [adsenseAccountsAdclientsCustomchannelsCreate](#adsenseaccountsadclientscustomchannelscreate) - Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [adsenseAccountsAdclientsCustomchannelsDelete](#adsenseaccountsadclientscustomchannelsdelete) - Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [adsenseAccountsAdclientsCustomchannelsList](#adsenseaccountsadclientscustomchannelslist) - Lists all the custom channels available in an ad client.
* [adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits](#adsenseaccountsadclientscustomchannelslistlinkedadunits) - Lists all the ad units available for a custom channel.
* [adsenseAccountsAdclientsCustomchannelsPatch](#adsenseaccountsadclientscustomchannelspatch) - Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [adsenseAccountsAdclientsList](#adsenseaccountsadclientslist) - Lists all the ad clients available in an account.
* [adsenseAccountsAdclientsUrlchannelsList](#adsenseaccountsadclientsurlchannelslist) - Lists active url channels.
* [adsenseAccountsAlertsList](#adsenseaccountsalertslist) - Lists all the alerts available in an account.
* [adsenseAccountsGetAdBlockingRecoveryTag](#adsenseaccountsgetadblockingrecoverytag) - Gets the ad blocking recovery tag of an account.
* [adsenseAccountsList](#adsenseaccountslist) - Lists all accounts available to this user.
* [adsenseAccountsListChildAccounts](#adsenseaccountslistchildaccounts) - Lists all accounts directly managed by the given AdSense account.
* [adsenseAccountsPaymentsList](#adsenseaccountspaymentslist) - Lists all the payments available for an account.
* [adsenseAccountsReportsGenerate](#adsenseaccountsreportsgenerate) - Generates an ad hoc report.
* [adsenseAccountsReportsGenerateCsv](#adsenseaccountsreportsgeneratecsv) - Generates a csv formatted ad hoc report.
* [adsenseAccountsReportsGetSaved](#adsenseaccountsreportsgetsaved) - Gets the saved report from the given resource name.
* [adsenseAccountsReportsSavedGenerate](#adsenseaccountsreportssavedgenerate) - Generates a saved report.
* [adsenseAccountsReportsSavedGenerateCsv](#adsenseaccountsreportssavedgeneratecsv) - Generates a csv formatted saved report.
* [adsenseAccountsReportsSavedList](#adsenseaccountsreportssavedlist) - Lists saved reports.
* [adsenseAccountsSitesGet](#adsenseaccountssitesget) - Gets information about the selected site.
* [adsenseAccountsSitesList](#adsenseaccountssiteslist) - Lists all the sites available in an account.

## adsenseAccountsAdclientsAdunitsCreate

Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentAdsSettings;
use \OpenAPI\OpenAPI\Models\Shared\ContentAdsSettingsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdUnitStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsAdunitsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->adUnitInput = new AdUnitInput();
    $request->adUnitInput->contentAdsSettings = new ContentAdsSettings();
    $request->adUnitInput->contentAdsSettings->size = 'delectus';
    $request->adUnitInput->contentAdsSettings->type = ContentAdsSettingsTypeEnum::DISPLAY;
    $request->adUnitInput->displayName = 'suscipit';
    $request->adUnitInput->state = AdUnitStateEnum::ACTIVE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new AdsenseAccountsAdclientsAdunitsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsAdunitsCreate($request, $requestSecurity);

    if ($response->adUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsAdunitsGetAdcode

Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsGetAdcodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsGetAdcodeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsAdunitsGetAdcodeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->name = 'Fred Strosin';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new AdsenseAccountsAdclientsAdunitsGetAdcodeSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsAdunitsGetAdcode($request, $requestSecurity);

    if ($response->adUnitAdCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsAdunitsList

Lists all ad units under a specified account and ad client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsAdunitsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'nam';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 143353;
    $request->pageToken = 'deleniti';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new AdsenseAccountsAdclientsAdunitsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdclientsAdunitsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsAdunitsList($request, $requestSecurity);

    if ($response->listAdUnitsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsAdunitsListLinkedCustomChannels

Lists all the custom channels available for an ad unit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->pageSize = 216550;
    $request->pageToken = 'excepturi';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsAdunitsListLinkedCustomChannels($request, $requestSecurity);

    if ($response->listLinkedCustomChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsCustomchannelsCreate

Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsCustomchannelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->customChannelInput = new CustomChannelInput();
    $request->customChannelInput->active = false;
    $request->customChannelInput->displayName = 'iste';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->key = 'saepe';
    $request->oauthToken = 'fuga';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new AdsenseAccountsAdclientsCustomchannelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsCustomchannelsCreate($request, $requestSecurity);

    if ($response->customChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsCustomchannelsDelete

Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsCustomchannelsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'reiciendis';
    $request->key = 'est';
    $request->name = 'Cameron Dach';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new AdsenseAccountsAdclientsCustomchannelsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsCustomchannelsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsCustomchannelsList

Lists all the custom channels available in an ad client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsCustomchannelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->oauthToken = 'doloribus';
    $request->pageSize = 958950;
    $request->pageToken = 'architecto';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new AdsenseAccountsAdclientsCustomchannelsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdclientsCustomchannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsCustomchannelsList($request, $requestSecurity);

    if ($response->listCustomChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits

Lists all the ad units available for a custom channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'commodi';
    $request->key = 'quam';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 244425;
    $request->pageToken = 'error';
    $request->parent = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits($request, $requestSecurity);

    if ($response->listLinkedAdUnitsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsCustomchannelsPatch

Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsCustomchannelsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsCustomchannelsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->customChannelInput = new CustomChannelInput();
    $request->customChannelInput->active = false;
    $request->customChannelInput->displayName = 'enim';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'tenetur';
    $request->key = 'ipsam';
    $request->name = 'Miss Rufus Ankunding';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->updateMask = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new AdsenseAccountsAdclientsCustomchannelsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsCustomchannelsPatch($request, $requestSecurity);

    if ($response->customChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsList

Lists all the ad clients available in an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->oauthToken = 'cum';
    $request->pageSize = 19987;
    $request->pageToken = 'doloremque';
    $request->parent = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new AdsenseAccountsAdclientsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdclientsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsList($request, $requestSecurity);

    if ($response->listAdClientsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsUrlchannelsList

Lists active url channels.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsUrlchannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsUrlchannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsUrlchannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsUrlchannelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsUrlchannelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'harum';
    $request->key = 'enim';
    $request->oauthToken = 'accusamus';
    $request->pageSize = 414263;
    $request->pageToken = 'repudiandae';
    $request->parent = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new AdsenseAccountsAdclientsUrlchannelsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdclientsUrlchannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsUrlchannelsList($request, $requestSecurity);

    if ($response->listUrlChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAlertsList

Lists all the alerts available in an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAlertsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAlertsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAlertsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAlertsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAlertsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'rem';
    $request->key = 'voluptates';
    $request->languageCode = 'quasi';
    $request->oauthToken = 'repudiandae';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new AdsenseAccountsAlertsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAlertsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAlertsList($request, $requestSecurity);

    if ($response->listAlertsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsGetAdBlockingRecoveryTag

Gets the ad blocking recovery tag of an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsGetAdBlockingRecoveryTagRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsGetAdBlockingRecoveryTagSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsGetAdBlockingRecoveryTagRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'explicabo';
    $request->key = 'deserunt';
    $request->name = 'Marty Green';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new AdsenseAccountsGetAdBlockingRecoveryTagSecurity();
    $requestSecurity->option1 = new AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsGetAdBlockingRecoveryTag($request, $requestSecurity);

    if ($response->adBlockingRecoveryTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsList

Lists all accounts available to this user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'fugit';
    $request->key = 'dolorum';
    $request->oauthToken = 'excepturi';
    $request->pageSize = 270008;
    $request->pageToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new AdsenseAccountsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsList($request, $requestSecurity);

    if ($response->listAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsListChildAccounts

Lists all accounts directly managed by the given AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListChildAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListChildAccountsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListChildAccountsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListChildAccountsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsListChildAccountsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->pageSize = 572252;
    $request->pageToken = 'officia';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AdsenseAccountsListChildAccountsSecurity();
    $requestSecurity->option1 = new AdsenseAccountsListChildAccountsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsListChildAccounts($request, $requestSecurity);

    if ($response->listChildAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsPaymentsList

Lists all the payments available for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsPaymentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsPaymentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsPaymentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsPaymentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsPaymentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->parent = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new AdsenseAccountsPaymentsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsPaymentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsPaymentsList($request, $requestSecurity);

    if ($response->listPaymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsReportsGenerate

Generates an ad hoc report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateDateRangeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateDimensionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateMetricsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateReportingTimeZoneEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsReportsGenerateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->account = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->currencyCode = 'accusamus';
    $request->dateRange = AdsenseAccountsReportsGenerateDateRangeEnum::LAST30_DAYS;
    $request->dimensions = [
        AdsenseAccountsReportsGenerateDimensionsEnum::COUNTRY_NAME,
        AdsenseAccountsReportsGenerateDimensionsEnum::CONTENT_PLATFORM_NAME,
        AdsenseAccountsReportsGenerateDimensionsEnum::PLATFORM_TYPE_CODE,
    ];
    $request->endDateDay = 501324;
    $request->endDateMonth = 533206;
    $request->endDateYear = 956084;
    $request->fields = 'amet';
    $request->filters = [
        'nisi',
        'vel',
        'natus',
    ];
    $request->key = 'omnis';
    $request->languageCode = 'molestiae';
    $request->limit = 19193;
    $request->metrics = [
        AdsenseAccountsReportsGenerateMetricsEnum::AD_REQUESTS_SPAM_RATIO,
        AdsenseAccountsReportsGenerateMetricsEnum::ESTIMATED_EARNINGS,
    ];
    $request->oauthToken = 'id';
    $request->orderBy = [
        'labore',
        'suscipit',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->reportingTimeZone = AdsenseAccountsReportsGenerateReportingTimeZoneEnum::GOOGLE_TIME_ZONE;
    $request->startDateDay = 428769;
    $request->startDateMonth = 878453;
    $request->startDateYear = 135474;
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new AdsenseAccountsReportsGenerateSecurity();
    $requestSecurity->option1 = new AdsenseAccountsReportsGenerateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsReportsGenerate($request, $requestSecurity);

    if ($response->reportResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsReportsGenerateCsv

Generates a csv formatted ad hoc report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateCsvRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateCsvDateRangeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateCsvDimensionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateCsvMetricsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateCsvSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateCsvSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateCsvSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsReportsGenerateCsvRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->account = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->currencyCode = 'sint';
    $request->dateRange = AdsenseAccountsReportsGenerateCsvDateRangeEnum::REPORTING_DATE_RANGE_UNSPECIFIED;
    $request->dimensions = [
        AdsenseAccountsReportsGenerateCsvDimensionsEnum::DOMAIN_REGISTRANT,
        AdsenseAccountsReportsGenerateCsvDimensionsEnum::PLATFORM_TYPE_CODE,
        AdsenseAccountsReportsGenerateCsvDimensionsEnum::OWNED_SITE_DOMAIN_NAME,
    ];
    $request->endDateDay = 431418;
    $request->endDateMonth = 221262;
    $request->endDateYear = 896547;
    $request->fields = 'odit';
    $request->filters = [
        'quasi',
        'iure',
    ];
    $request->key = 'doloribus';
    $request->languageCode = 'debitis';
    $request->limit = 260341;
    $request->metrics = [
        AdsenseAccountsReportsGenerateCsvMetricsEnum::MATCHED_AD_REQUESTS_CTR,
        AdsenseAccountsReportsGenerateCsvMetricsEnum::ESTIMATED_EARNINGS,
        AdsenseAccountsReportsGenerateCsvMetricsEnum::AD_REQUESTS_COVERAGE,
        AdsenseAccountsReportsGenerateCsvMetricsEnum::MATCHED_AD_REQUESTS,
    ];
    $request->oauthToken = 'architecto';
    $request->orderBy = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->reportingTimeZone = AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum::REPORTING_TIME_ZONE_UNSPECIFIED;
    $request->startDateDay = 904648;
    $request->startDateMonth = 868126;
    $request->startDateYear = 37559;
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new AdsenseAccountsReportsGenerateCsvSecurity();
    $requestSecurity->option1 = new AdsenseAccountsReportsGenerateCsvSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsReportsGenerateCsv($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsReportsGetSaved

Gets the saved report from the given resource name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGetSavedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGetSavedSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGetSavedSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGetSavedSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsReportsGetSavedRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'illum';
    $request->key = 'pariatur';
    $request->name = 'Nathaniel Marks';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new AdsenseAccountsReportsGetSavedSecurity();
    $requestSecurity->option1 = new AdsenseAccountsReportsGetSavedSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsReportsGetSaved($request, $requestSecurity);

    if ($response->savedReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsReportsSavedGenerate

Generates a saved report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateDateRangeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsReportsSavedGenerateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->currencyCode = 'eaque';
    $request->dateRange = AdsenseAccountsReportsSavedGenerateDateRangeEnum::LAST7_DAYS;
    $request->endDateDay = 365496;
    $request->endDateMonth = 975522;
    $request->endDateYear = 16627;
    $request->fields = 'fugiat';
    $request->key = 'amet';
    $request->languageCode = 'aut';
    $request->name = 'Lewis Welch';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->reportingTimeZone = AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum::ACCOUNT_TIME_ZONE;
    $request->startDateDay = 489549;
    $request->startDateMonth = 54338;
    $request->startDateYear = 338985;
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new AdsenseAccountsReportsSavedGenerateSecurity();
    $requestSecurity->option1 = new AdsenseAccountsReportsSavedGenerateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsReportsSavedGenerate($request, $requestSecurity);

    if ($response->reportResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsReportsSavedGenerateCsv

Generates a csv formatted saved report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateCsvRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateCsvSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateCsvSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateCsvSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsReportsSavedGenerateCsvRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quam';
    $request->currencyCode = 'dolor';
    $request->dateRange = AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum::LAST7_DAYS;
    $request->endDateDay = 345352;
    $request->endDateMonth = 944120;
    $request->endDateYear = 928082;
    $request->fields = 'omnis';
    $request->key = 'facilis';
    $request->languageCode = 'perspiciatis';
    $request->name = 'Robyn Cruickshank';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->reportingTimeZone = AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum::GOOGLE_TIME_ZONE;
    $request->startDateDay = 237893;
    $request->startDateMonth = 992397;
    $request->startDateYear = 934214;
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new AdsenseAccountsReportsSavedGenerateCsvSecurity();
    $requestSecurity->option1 = new AdsenseAccountsReportsSavedGenerateCsvSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsReportsSavedGenerateCsv($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsReportsSavedList

Lists saved reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsReportsSavedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'nobis';
    $request->key = 'libero';
    $request->oauthToken = 'delectus';
    $request->pageSize = 311945;
    $request->pageToken = 'quos';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new AdsenseAccountsReportsSavedListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsReportsSavedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsReportsSavedList($request, $requestSecurity);

    if ($response->listSavedReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsSitesGet

Gets information about the selected site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSitesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSitesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSitesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSitesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsSitesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'cum';
    $request->key = 'voluptate';
    $request->name = 'Johanna Farrell';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new AdsenseAccountsSitesGetSecurity();
    $requestSecurity->option1 = new AdsenseAccountsSitesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsSitesGet($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsSitesList

Lists all the sites available in an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSitesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSitesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSitesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSitesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsSitesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'voluptatibus';
    $request->key = 'voluptas';
    $request->oauthToken = 'natus';
    $request->pageSize = 179603;
    $request->pageToken = 'atque';
    $request->parent = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new AdsenseAccountsSitesListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsSitesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsSitesList($request, $requestSecurity);

    if ($response->listSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
