# settings

### Available Operations

* [calendarSettingsGet](#calendarsettingsget) - Returns a single user setting.
* [calendarSettingsList](#calendarsettingslist) - Returns all user settings for the authenticated user.
* [calendarSettingsWatch](#calendarsettingswatch) - Watch for changes to Settings resources.

## calendarSettingsGet

Returns a single user setting.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarSettingsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'beatae';
    $request->key = 'est';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'corrupti';
    $request->setting = 'molestiae';
    $request->userIp = 'provident';

    $requestSecurity = new CalendarSettingsGetSecurity();
    $requestSecurity->option1 = new CalendarSettingsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->calendarSettingsGet($request, $requestSecurity);

    if ($response->setting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarSettingsList

Returns all user settings for the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarSettingsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'accusamus';
    $request->key = 'necessitatibus';
    $request->maxResults = 733289;
    $request->oauthToken = 'sint';
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->syncToken = 'ipsam';
    $request->userIp = 'rerum';

    $requestSecurity = new CalendarSettingsListSecurity();
    $requestSecurity->option1 = new CalendarSettingsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->calendarSettingsList($request, $requestSecurity);

    if ($response->settings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarSettingsWatch

Watch for changes to Settings resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsWatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsWatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsWatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CalendarSettingsWatchSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarSettingsWatchRequest();
    $request->channel = new Channel();
    $request->channel->address = '3897 Abshire Crest';
    $request->channel->expiration = 'quidem';
    $request->channel->id = 'ae0be2d7-8225-49e3-aa4b-5197f92443da';
    $request->channel->kind = 'dignissimos';
    $request->channel->params = [
        'necessitatibus' => 'corporis',
        'qui' => 'expedita',
        'voluptatum' => 'cupiditate',
        'minima' => 'placeat',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'enim';
    $request->channel->resourceUri = 'neque';
    $request->channel->token = 'in';
    $request->channel->type = 'minus';
    $request->alt = AltEnum::JSON;
    $request->fields = 'eum';
    $request->key = 'modi';
    $request->maxResults = 357347;
    $request->oauthToken = 'magnam';
    $request->pageToken = 'voluptates';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->syncToken = 'tempore';
    $request->userIp = 'aperiam';

    $requestSecurity = new CalendarSettingsWatchSecurity();
    $requestSecurity->option1 = new CalendarSettingsWatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->calendarSettingsWatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
