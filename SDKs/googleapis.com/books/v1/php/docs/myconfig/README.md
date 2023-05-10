# myconfig

### Available Operations

* [booksMyconfigGetUserSettings](#booksmyconfiggetusersettings) - Gets the current settings for the user.
* [booksMyconfigReleaseDownloadAccess](#booksmyconfigreleasedownloadaccess) - Release downloaded content access restriction.
* [booksMyconfigRequestAccess](#booksmyconfigrequestaccess) - Request concurrent and download access restrictions.
* [booksMyconfigSyncVolumeLicenses](#booksmyconfigsyncvolumelicenses) - Request downloaded content access for specified volumes on the My eBooks shelf.
* [booksMyconfigUpdateUserSettings](#booksmyconfigupdateusersettings) - Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

## booksMyconfigGetUserSettings

Gets the current settings for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigGetUserSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigGetUserSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMyconfigGetUserSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->country = 'Saint Helena';
    $request->fields = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'et';

    $requestSecurity = new BooksMyconfigGetUserSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->myconfig->booksMyconfigGetUserSettings($request, $requestSecurity);

    if ($response->usersettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMyconfigReleaseDownloadAccess

Release downloaded content access restriction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigReleaseDownloadAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigReleaseDownloadAccessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMyconfigReleaseDownloadAccessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->cpksver = 'sint';
    $request->fields = 'accusantium';
    $request->key = 'mollitia';
    $request->locale = 'reiciendis';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->source = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';
    $request->volumeIds = [
        'nemo',
    ];

    $requestSecurity = new BooksMyconfigReleaseDownloadAccessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->myconfig->booksMyconfigReleaseDownloadAccess($request, $requestSecurity);

    if ($response->downloadAccesses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMyconfigRequestAccess

Request concurrent and download access restrictions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigRequestAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigRequestAccessLicenseTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigRequestAccessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMyconfigRequestAccessRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->cpksver = 'eius';
    $request->fields = 'maxime';
    $request->key = 'deleniti';
    $request->licenseTypes = BooksMyconfigRequestAccessLicenseTypesEnum::CONCURRENT;
    $request->locale = 'in';
    $request->nonce = 'architecto';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->source = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';
    $request->volumeId = 'repellat';

    $requestSecurity = new BooksMyconfigRequestAccessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->myconfig->booksMyconfigRequestAccess($request, $requestSecurity);

    if ($response->requestAccessData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMyconfigSyncVolumeLicenses

Request downloaded content access for specified volumes on the My eBooks shelf.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigSyncVolumeLicensesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigSyncVolumeLicensesFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigSyncVolumeLicensesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMyconfigSyncVolumeLicensesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->cpksver = 'accusantium';
    $request->features = [
        BooksMyconfigSyncVolumeLicensesFeaturesEnum::RENTALS,
    ];
    $request->fields = 'natus';
    $request->includeNonComicsSeries = false;
    $request->key = 'magni';
    $request->locale = 'sunt';
    $request->nonce = 'quo';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->showPreorders = false;
    $request->source = 'maxime';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';
    $request->volumeIds = [
        'ea',
    ];

    $requestSecurity = new BooksMyconfigSyncVolumeLicensesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->myconfig->booksMyconfigSyncVolumeLicenses($request, $requestSecurity);

    if ($response->volumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMyconfigUpdateUserSettings

Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigUpdateUserSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Usersettings;
use \OpenAPI\OpenAPI\Models\Shared\UsersettingsNotesExport;
use \OpenAPI\OpenAPI\Models\Shared\UsersettingsNotification;
use \OpenAPI\OpenAPI\Models\Shared\UsersettingsNotificationMatchMyInterests;
use \OpenAPI\OpenAPI\Models\Shared\UsersettingsNotificationMoreFromAuthors;
use \OpenAPI\OpenAPI\Models\Shared\UsersettingsNotificationMoreFromSeries;
use \OpenAPI\OpenAPI\Models\Shared\UsersettingsNotificationPriceDrop;
use \OpenAPI\OpenAPI\Models\Shared\UsersettingsNotificationRewardExpirations;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMyconfigUpdateUserSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMyconfigUpdateUserSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->usersettings = new Usersettings();
    $request->usersettings->kind = 'ab';
    $request->usersettings->notesExport = new UsersettingsNotesExport();
    $request->usersettings->notesExport->folderName = 'maiores';
    $request->usersettings->notesExport->isEnabled = false;
    $request->usersettings->notification = new UsersettingsNotification();
    $request->usersettings->notification->matchMyInterests = new UsersettingsNotificationMatchMyInterests();
    $request->usersettings->notification->matchMyInterests->optedState = 'quidem';
    $request->usersettings->notification->moreFromAuthors = new UsersettingsNotificationMoreFromAuthors();
    $request->usersettings->notification->moreFromAuthors->optedState = 'ipsam';
    $request->usersettings->notification->moreFromSeries = new UsersettingsNotificationMoreFromSeries();
    $request->usersettings->notification->moreFromSeries->optedState = 'voluptate';
    $request->usersettings->notification->priceDrop = new UsersettingsNotificationPriceDrop();
    $request->usersettings->notification->priceDrop->optedState = 'autem';
    $request->usersettings->notification->rewardExpirations = new UsersettingsNotificationRewardExpirations();
    $request->usersettings->notification->rewardExpirations->optedState = 'nam';
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->fields = 'voluptatibus';
    $request->key = 'perferendis';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new BooksMyconfigUpdateUserSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->myconfig->booksMyconfigUpdateUserSettings($request, $requestSecurity);

    if ($response->usersettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
