# liasettings

### Available Operations

* [contentLiasettingsCustombatch](#contentliasettingscustombatch) - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* [contentLiasettingsGet](#contentliasettingsget) - Retrieves the LIA settings of the account.
* [contentLiasettingsGetaccessiblegmbaccounts](#contentliasettingsgetaccessiblegmbaccounts) - Retrieves the list of accessible Google My Business accounts.
* [contentLiasettingsList](#contentliasettingslist) - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* [contentLiasettingsListposdataproviders](#contentliasettingslistposdataproviders) - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* [contentLiasettingsRequestgmbaccess](#contentliasettingsrequestgmbaccess) - Requests access to a specified Google My Business account.
* [contentLiasettingsRequestinventoryverification](#contentliasettingsrequestinventoryverification) - Requests inventory validation for the specified country.
* [contentLiasettingsSetinventoryverificationcontact](#contentliasettingssetinventoryverificationcontact) - Sets the inventory verification contract for the specified country.
* [contentLiasettingsSetposdataprovider](#contentliasettingssetposdataprovider) - Sets the POS data provider for the specified country.
* [contentLiasettingsUpdate](#contentliasettingsupdate) - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

## contentLiasettingsCustombatch

Retrieves and/or updates the LIA settings of multiple accounts in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiasettingsCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\LiasettingsCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\LiaSettings;
use \OpenAPI\OpenAPI\Models\Shared\LiaCountrySettings;
use \OpenAPI\OpenAPI\Models\Shared\LiaAboutPageSettings;
use \OpenAPI\OpenAPI\Models\Shared\LiaInventorySettings;
use \OpenAPI\OpenAPI\Models\Shared\LiaOnDisplayToOrderSettings;
use \OpenAPI\OpenAPI\Models\Shared\LiaPosDataProvider;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLiasettingsCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->liasettingsCustomBatchRequest = new LiasettingsCustomBatchRequest();
    $request->liasettingsCustomBatchRequest->entries = [
        new LiasettingsCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->dryRun = false;
    $request->fields = 'deserunt';
    $request->key = 'quam';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new ContentLiasettingsCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liasettings->contentLiasettingsCustombatch($request, $requestSecurity);

    if ($response->liasettingsCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentLiasettingsGet

Retrieves the LIA settings of the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLiasettingsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->accountId = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'totam';
    $request->key = 'incidunt';
    $request->merchantId = 'aspernatur';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new ContentLiasettingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liasettings->contentLiasettingsGet($request, $requestSecurity);

    if ($response->liaSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentLiasettingsGetaccessiblegmbaccounts

Retrieves the list of accessible Google My Business accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsGetaccessiblegmbaccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsGetaccessiblegmbaccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLiasettingsGetaccessiblegmbaccountsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestias';
    $request->accountId = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'neque';
    $request->fields = 'fugit';
    $request->key = 'magni';
    $request->merchantId = 'odio';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ContentLiasettingsGetaccessiblegmbaccountsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liasettings->contentLiasettingsGetaccessiblegmbaccounts($request, $requestSecurity);

    if ($response->liasettingsGetAccessibleGmbAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentLiasettingsList

Lists the LIA settings of the sub-accounts in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLiasettingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'et';
    $request->key = 'saepe';
    $request->maxResults = 217450;
    $request->merchantId = 'veritatis';
    $request->oauthToken = 'nobis';
    $request->pageToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new ContentLiasettingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liasettings->contentLiasettingsList($request, $requestSecurity);

    if ($response->liasettingsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentLiasettingsListposdataproviders

Retrieves the list of POS data providers that have active settings for the all eiligible countries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsListposdataprovidersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsListposdataprovidersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLiasettingsListposdataprovidersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'adipisci';
    $request->key = 'dolorum';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new ContentLiasettingsListposdataprovidersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liasettings->contentLiasettingsListposdataproviders($request, $requestSecurity);

    if ($response->liasettingsListPosDataProvidersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentLiasettingsRequestgmbaccess

Requests access to a specified Google My Business account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsRequestgmbaccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsRequestgmbaccessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLiasettingsRequestgmbaccessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequatur';
    $request->accountId = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'porro';
    $request->fields = 'doloribus';
    $request->gmbEmail = 'ut';
    $request->key = 'facilis';
    $request->merchantId = 'cupiditate';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new ContentLiasettingsRequestgmbaccessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liasettings->contentLiasettingsRequestgmbaccess($request, $requestSecurity);

    if ($response->liasettingsRequestGmbAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentLiasettingsRequestinventoryverification

Requests inventory validation for the specified country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsRequestinventoryverificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsRequestinventoryverificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLiasettingsRequestinventoryverificationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->accountId = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->country = 'Greenland';
    $request->fields = 'ipsum';
    $request->key = 'delectus';
    $request->merchantId = 'voluptate';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new ContentLiasettingsRequestinventoryverificationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liasettings->contentLiasettingsRequestinventoryverification($request, $requestSecurity);

    if ($response->liasettingsRequestInventoryVerificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentLiasettingsSetinventoryverificationcontact

Sets the inventory verification contract for the specified country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsSetinventoryverificationcontactRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsSetinventoryverificationcontactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLiasettingsSetinventoryverificationcontactRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->accountId = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->contactEmail = 'facilis';
    $request->contactName = 'vero';
    $request->country = 'Liberia';
    $request->fields = 'dolore';
    $request->key = 'quibusdam';
    $request->language = 'illum';
    $request->merchantId = 'sequi';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new ContentLiasettingsSetinventoryverificationcontactSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liasettings->contentLiasettingsSetinventoryverificationcontact($request, $requestSecurity);

    if ($response->liasettingsSetInventoryVerificationContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentLiasettingsSetposdataprovider

Sets the POS data provider for the specified country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsSetposdataproviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsSetposdataproviderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLiasettingsSetposdataproviderRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nulla';
    $request->accountId = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->country = 'Western Sahara';
    $request->fields = 'iusto';
    $request->key = 'eligendi';
    $request->merchantId = 'ducimus';
    $request->oauthToken = 'alias';
    $request->posDataProviderId = 'officia';
    $request->posExternalAccountId = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new ContentLiasettingsSetposdataproviderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liasettings->contentLiasettingsSetposdataprovider($request, $requestSecurity);

    if ($response->liasettingsSetPosDataProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentLiasettingsUpdate

Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiaSettings;
use \OpenAPI\OpenAPI\Models\Shared\LiaCountrySettings;
use \OpenAPI\OpenAPI\Models\Shared\LiaAboutPageSettings;
use \OpenAPI\OpenAPI\Models\Shared\LiaInventorySettings;
use \OpenAPI\OpenAPI\Models\Shared\LiaOnDisplayToOrderSettings;
use \OpenAPI\OpenAPI\Models\Shared\LiaPosDataProvider;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLiasettingsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLiasettingsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->liaSettings = new LiaSettings();
    $request->liaSettings->accountId = 'possimus';
    $request->liaSettings->countrySettings = [
        new LiaCountrySettings(),
        new LiaCountrySettings(),
    ];
    $request->liaSettings->kind = 'ratione';
    $request->accessToken = 'ex';
    $request->accountId = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->dryRun = false;
    $request->fields = 'maiores';
    $request->key = 'quasi';
    $request->merchantId = 'ex';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'nostrum';

    $requestSecurity = new ContentLiasettingsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liasettings->contentLiasettingsUpdate($request, $requestSecurity);

    if ($response->liaSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
