# liasettings

### Available Operations

* [contentLiasettingsCustombatch](#contentliasettingscustombatch) - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* [contentLiasettingsGet](#contentliasettingsget) - Retrieves the LIA settings of the account.
* [contentLiasettingsGetaccessiblegmbaccounts](#contentliasettingsgetaccessiblegmbaccounts) - Retrieves the list of accessible Business Profiles.
* [contentLiasettingsList](#contentliasettingslist) - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* [contentLiasettingsListposdataproviders](#contentliasettingslistposdataproviders) - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* [contentLiasettingsRequestgmbaccess](#contentliasettingsrequestgmbaccess) - Requests access to a specified Business Profile.
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
        new LiasettingsCustomBatchRequestEntry(),
        new LiasettingsCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'atque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nam';
    $request->fields = 'tenetur';
    $request->key = 'laboriosam';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'voluptate';

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
    $request->accessToken = 'reiciendis';
    $request->accountId = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'voluptates';
    $request->key = 'perferendis';
    $request->merchantId = 'est';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'fuga';

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

Retrieves the list of accessible Business Profiles.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->accountId = 'veniam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'repudiandae';
    $request->key = 'quasi';
    $request->merchantId = 'atque';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'suscipit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'amet';
    $request->key = 'assumenda';
    $request->maxResults = 410301;
    $request->merchantId = 'atque';
    $request->oauthToken = 'error';
    $request->pageToken = 'officiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'natus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maiores';
    $request->fields = 'corrupti';
    $request->key = 'at';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'repudiandae';

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

Requests access to a specified Business Profile.

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
    $request->accessToken = 'atque';
    $request->accountId = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'repellendus';
    $request->gmbEmail = 'labore';
    $request->key = 'reiciendis';
    $request->merchantId = 'doloremque';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'beatae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'enim';
    $request->accountId = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->country = 'Mauritius';
    $request->fields = 'magnam';
    $request->key = 'saepe';
    $request->merchantId = 'consequuntur';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'in';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eveniet';
    $request->accountId = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->contactEmail = 'id';
    $request->contactName = 'quis';
    $request->country = 'Japan';
    $request->fields = 'error';
    $request->key = 'illo';
    $request->language = 'corporis';
    $request->merchantId = 'quidem';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'doloremque';

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
    $request->accessToken = 'ipsa';
    $request->accountId = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'molestiae';
    $request->country = 'Tunisia';
    $request->fields = 'qui';
    $request->key = 'cum';
    $request->merchantId = 'iure';
    $request->oauthToken = 'necessitatibus';
    $request->posDataProviderId = 'ratione';
    $request->posExternalAccountId = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'rem';

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
    $request->liaSettings->accountId = 'ad';
    $request->liaSettings->countrySettings = [
        new LiaCountrySettings(),
        new LiaCountrySettings(),
        new LiaCountrySettings(),
        new LiaCountrySettings(),
    ];
    $request->liaSettings->kind = 'alias';
    $request->accessToken = 'corporis';
    $request->accountId = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'mollitia';
    $request->fields = 'voluptas';
    $request->key = 'alias';
    $request->merchantId = 'maiores';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'minima';

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
