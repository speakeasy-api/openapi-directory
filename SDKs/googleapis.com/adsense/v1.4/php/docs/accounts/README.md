# accounts

### Available Operations

* [adsenseAccountsAdclientsGetAdCode](#adsenseaccountsadclientsgetadcode) - Get Auto ad code for a given ad client.
* [adsenseAccountsAdclientsList](#adsenseaccountsadclientslist) - List all ad clients in the specified account.
* [adsenseAccountsAdunitsCustomchannelsList](#adsenseaccountsadunitscustomchannelslist) - List all custom channels which the specified ad unit belongs to.
* [adsenseAccountsAdunitsGet](#adsenseaccountsadunitsget) - Gets the specified ad unit in the specified ad client for the specified account.
* [adsenseAccountsAdunitsGetAdCode](#adsenseaccountsadunitsgetadcode) - Get ad code for the specified ad unit.
* [adsenseAccountsAdunitsList](#adsenseaccountsadunitslist) - List all ad units in the specified ad client for the specified account.
* [adsenseAccountsAlertsDelete](#adsenseaccountsalertsdelete) - Dismiss (delete) the specified alert from the specified publisher AdSense account.
* [adsenseAccountsAlertsList](#adsenseaccountsalertslist) - List the alerts for the specified AdSense account.
* [adsenseAccountsCustomchannelsAdunitsList](#adsenseaccountscustomchannelsadunitslist) - List all ad units in the specified custom channel.
* [adsenseAccountsCustomchannelsGet](#adsenseaccountscustomchannelsget) - Get the specified custom channel from the specified ad client for the specified account.
* [adsenseAccountsCustomchannelsList](#adsenseaccountscustomchannelslist) - List all custom channels in the specified ad client for the specified account.
* [adsenseAccountsGet](#adsenseaccountsget) - Get information about the selected AdSense account.
* [adsenseAccountsList](#adsenseaccountslist) - List all accounts available to this AdSense account.
* [adsenseAccountsPaymentsList](#adsenseaccountspaymentslist) - List the payments for the specified AdSense account.
* [adsenseAccountsReportsGenerate](#adsenseaccountsreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* [adsenseAccountsReportsSavedGenerate](#adsenseaccountsreportssavedgenerate) - Generate an AdSense report based on the saved report ID sent in the query parameters.
* [adsenseAccountsReportsSavedList](#adsenseaccountsreportssavedlist) - List all saved reports in the specified AdSense account.
* [adsenseAccountsSavedadstylesGet](#adsenseaccountssavedadstylesget) - List a specific saved ad style for the specified account.
* [adsenseAccountsSavedadstylesList](#adsenseaccountssavedadstyleslist) - List all saved ad styles in the specified account.
* [adsenseAccountsUrlchannelsList](#adsenseaccountsurlchannelslist) - List all URL channels in the specified ad client for the specified account.

## adsenseAccountsAdclientsGetAdCode

Get Auto ad code for a given ad client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsGetAdCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsGetAdCodeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsGetAdCodeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsGetAdCodeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsGetAdCodeRequest();
    $request->accountId = 'error';
    $request->adClientId = 'deserunt';
    $request->alt = AltEnum::CSV;
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->tagPartner = 'delectus';
    $request->userIp = 'tempora';

    $requestSecurity = new AdsenseAccountsAdclientsGetAdCodeSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdclientsGetAdCodeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsGetAdCode($request, $requestSecurity);

    if ($response->adCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdclientsList

List all ad clients in the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdclientsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdclientsListRequest();
    $request->accountId = 'suscipit';
    $request->alt = AltEnum::CSV;
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->maxResults = 528895;
    $request->oauthToken = 'iusto';
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->userIp = 'recusandae';

    $requestSecurity = new AdsenseAccountsAdclientsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdclientsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdclientsList($request, $requestSecurity);

    if ($response->adClients !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdunitsCustomchannelsList

List all custom channels which the specified ad unit belongs to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsCustomchannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsCustomchannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsCustomchannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsCustomchannelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdunitsCustomchannelsListRequest();
    $request->accountId = 'temporibus';
    $request->adClientId = 'ab';
    $request->adUnitId = 'quis';
    $request->alt = AltEnum::CSV;
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->maxResults = 368241;
    $request->oauthToken = 'repellendus';
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->userIp = 'odit';

    $requestSecurity = new AdsenseAccountsAdunitsCustomchannelsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdunitsCustomchannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdunitsCustomchannelsList($request, $requestSecurity);

    if ($response->customChannels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdunitsGet

Gets the specified ad unit in the specified ad client for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdunitsGetRequest();
    $request->accountId = 'at';
    $request->adClientId = 'at';
    $request->adUnitId = 'maiores';
    $request->alt = AltEnum::CSV;
    $request->fields = 'quod';
    $request->key = 'quod';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->userIp = 'porro';

    $requestSecurity = new AdsenseAccountsAdunitsGetSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdunitsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdunitsGet($request, $requestSecurity);

    if ($response->adUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdunitsGetAdCode

Get ad code for the specified ad unit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsGetAdCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsGetAdCodeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsGetAdCodeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsGetAdCodeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdunitsGetAdCodeRequest();
    $request->accountId = 'dolorum';
    $request->adClientId = 'dicta';
    $request->adUnitId = 'nam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->userIp = 'optio';

    $requestSecurity = new AdsenseAccountsAdunitsGetAdCodeSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdunitsGetAdCodeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdunitsGetAdCode($request, $requestSecurity);

    if ($response->adCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAdunitsList

List all ad units in the specified ad client for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAdunitsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAdunitsListRequest();
    $request->accountId = 'totam';
    $request->adClientId = 'beatae';
    $request->alt = AltEnum::CSV;
    $request->fields = 'molestiae';
    $request->includeInactive = false;
    $request->key = 'modi';
    $request->maxResults = 186332;
    $request->oauthToken = 'impedit';
    $request->pageToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->userIp = 'ipsum';

    $requestSecurity = new AdsenseAccountsAdunitsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAdunitsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAdunitsList($request, $requestSecurity);

    if ($response->adUnits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAlertsDelete

Dismiss (delete) the specified alert from the specified publisher AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAlertsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAlertsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAlertsDeleteRequest();
    $request->accountId = 'excepturi';
    $request->alertId = 'aspernatur';
    $request->alt = AltEnum::CSV;
    $request->fields = 'ad';
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->userIp = 'dolor';

    $requestSecurity = new AdsenseAccountsAlertsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAlertsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsAlertsList

List the alerts for the specified AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAlertsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAlertsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAlertsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsAlertsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsAlertsListRequest();
    $request->accountId = 'natus';
    $request->alt = AltEnum::CSV;
    $request->fields = 'hic';
    $request->key = 'saepe';
    $request->locale = 'fuga';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->userIp = 'iste';

    $requestSecurity = new AdsenseAccountsAlertsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsAlertsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsAlertsList($request, $requestSecurity);

    if ($response->alerts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsCustomchannelsAdunitsList

List all ad units in the specified custom channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsAdunitsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsAdunitsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsAdunitsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsAdunitsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsCustomchannelsAdunitsListRequest();
    $request->accountId = 'iure';
    $request->adClientId = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->customChannelId = 'architecto';
    $request->fields = 'ipsa';
    $request->includeInactive = false;
    $request->key = 'reiciendis';
    $request->maxResults = 666767;
    $request->oauthToken = 'mollitia';
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->userIp = 'dolorem';

    $requestSecurity = new AdsenseAccountsCustomchannelsAdunitsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsCustomchannelsAdunitsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsCustomchannelsAdunitsList($request, $requestSecurity);

    if ($response->adUnits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsCustomchannelsGet

Get the specified custom channel from the specified ad client for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsCustomchannelsGetRequest();
    $request->accountId = 'corporis';
    $request->adClientId = 'explicabo';
    $request->alt = AltEnum::JSON;
    $request->customChannelId = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->userIp = 'accusantium';

    $requestSecurity = new AdsenseAccountsCustomchannelsGetSecurity();
    $requestSecurity->option1 = new AdsenseAccountsCustomchannelsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsCustomchannelsGet($request, $requestSecurity);

    if ($response->customChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsCustomchannelsList

List all custom channels in the specified ad client for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsCustomchannelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsCustomchannelsListRequest();
    $request->accountId = 'iure';
    $request->adClientId = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->maxResults = 652790;
    $request->oauthToken = 'dolorem';
    $request->pageToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->userIp = 'repellat';

    $requestSecurity = new AdsenseAccountsCustomchannelsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsCustomchannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsCustomchannelsList($request, $requestSecurity);

    if ($response->customChannels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsGet

Get information about the selected AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsGetRequest();
    $request->accountId = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->fields = 'numquam';
    $request->key = 'commodi';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->tree = false;
    $request->userIp = 'velit';

    $requestSecurity = new AdsenseAccountsGetSecurity();
    $requestSecurity->option1 = new AdsenseAccountsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsGet($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsList

List all accounts available to this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->maxResults = 110375;
    $request->oauthToken = 'laborum';
    $request->pageToken = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->userIp = 'odit';

    $requestSecurity = new AdsenseAccountsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsList($request, $requestSecurity);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsPaymentsList

List the payments for the specified AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsPaymentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsPaymentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsPaymentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsPaymentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsPaymentsListRequest();
    $request->accountId = 'quo';
    $request->alt = AltEnum::CSV;
    $request->fields = 'tenetur';
    $request->key = 'ipsam';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->userIp = 'aut';

    $requestSecurity = new AdsenseAccountsPaymentsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsPaymentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsPaymentsList($request, $requestSecurity);

    if ($response->payments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsReportsGenerate

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsGenerateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsReportsGenerateRequest();
    $request->accountId = 'quasi';
    $request->alt = AltEnum::JSON;
    $request->currency = 'temporibus';
    $request->dimension = [
        'quasi',
        'reiciendis',
        'voluptatibus',
    ];
    $request->endDate = 'vero';
    $request->fields = 'nihil';
    $request->filter = [
        'voluptatibus',
        'ipsa',
        'omnis',
    ];
    $request->key = 'voluptate';
    $request->locale = 'cum';
    $request->maxResults = 19987;
    $request->metric = [
        'reprehenderit',
    ];
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->sort = [
        'corporis',
    ];
    $request->startDate = 'dolore';
    $request->startIndex = 480894;
    $request->useTimezoneReporting = false;
    $request->userIp = 'dicta';

    $requestSecurity = new AdsenseAccountsReportsGenerateSecurity();
    $requestSecurity->option1 = new AdsenseAccountsReportsGenerateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsReportsGenerate($request, $requestSecurity);

    if ($response->adsenseReportsGenerateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsReportsSavedGenerate

Generate an AdSense report based on the saved report ID sent in the query parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedGenerateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsReportsSavedGenerateRequest();
    $request->accountId = 'harum';
    $request->alt = AltEnum::CSV;
    $request->fields = 'accusamus';
    $request->key = 'commodi';
    $request->locale = 'repudiandae';
    $request->maxResults = 64147;
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->savedReportId = 'molestias';
    $request->startIndex = 566602;
    $request->userIp = 'pariatur';

    $requestSecurity = new AdsenseAccountsReportsSavedGenerateSecurity();
    $requestSecurity->option1 = new AdsenseAccountsReportsSavedGenerateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsReportsSavedGenerate($request, $requestSecurity);

    if ($response->adsenseReportsGenerateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsReportsSavedList

List all saved reports in the specified AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsReportsSavedListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsReportsSavedListRequest();
    $request->accountId = 'modi';
    $request->alt = AltEnum::JSON;
    $request->fields = 'rem';
    $request->key = 'voluptates';
    $request->maxResults = 93940;
    $request->oauthToken = 'repudiandae';
    $request->pageToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->userIp = 'itaque';

    $requestSecurity = new AdsenseAccountsReportsSavedListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsReportsSavedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsReportsSavedList($request, $requestSecurity);

    if ($response->savedReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsSavedadstylesGet

List a specific saved ad style for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSavedadstylesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSavedadstylesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSavedadstylesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSavedadstylesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsSavedadstylesGetRequest();
    $request->accountId = 'incidunt';
    $request->alt = AltEnum::CSV;
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->savedAdStyleId = 'deserunt';
    $request->userIp = 'distinctio';

    $requestSecurity = new AdsenseAccountsSavedadstylesGetSecurity();
    $requestSecurity->option1 = new AdsenseAccountsSavedadstylesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsSavedadstylesGet($request, $requestSecurity);

    if ($response->savedAdStyle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsSavedadstylesList

List all saved ad styles in the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSavedadstylesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSavedadstylesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSavedadstylesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsSavedadstylesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsSavedadstylesListRequest();
    $request->accountId = 'quibusdam';
    $request->alt = AltEnum::CSV;
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->maxResults = 397821;
    $request->oauthToken = 'cupiditate';
    $request->pageToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->userIp = 'magni';

    $requestSecurity = new AdsenseAccountsSavedadstylesListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsSavedadstylesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsSavedadstylesList($request, $requestSecurity);

    if ($response->savedAdStyles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAccountsUrlchannelsList

List all URL channels in the specified ad client for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsUrlchannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsUrlchannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsUrlchannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAccountsUrlchannelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAccountsUrlchannelsListRequest();
    $request->accountId = 'assumenda';
    $request->adClientId = 'ipsam';
    $request->alt = AltEnum::CSV;
    $request->fields = 'fugit';
    $request->key = 'dolorum';
    $request->maxResults = 569618;
    $request->oauthToken = 'tempora';
    $request->pageToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->userIp = 'labore';

    $requestSecurity = new AdsenseAccountsUrlchannelsListSecurity();
    $requestSecurity->option1 = new AdsenseAccountsUrlchannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adsenseAccountsUrlchannelsList($request, $requestSecurity);

    if ($response->urlChannels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
