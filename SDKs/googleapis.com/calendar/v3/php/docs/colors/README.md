# colors

### Available Operations

* [calendarColorsGet](#calendarcolorsget) - Returns the color definitions for calendars and events.

## calendarColorsGet

Returns the color definitions for calendars and events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarColorsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarColorsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarColorsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarColorsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarColorsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'consequatur';
    $request->key = 'tempora';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->userIp = 'aspernatur';

    $requestSecurity = new CalendarColorsGetSecurity();
    $requestSecurity->option1 = new CalendarColorsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->colors->calendarColorsGet($request, $requestSecurity);

    if ($response->colors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
