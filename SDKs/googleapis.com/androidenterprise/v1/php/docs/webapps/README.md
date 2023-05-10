# webapps

### Available Operations

* [androidenterpriseWebappsDelete](#androidenterprisewebappsdelete) - Deletes an existing web app.
* [androidenterpriseWebappsGet](#androidenterprisewebappsget) - Gets an existing web app.
* [androidenterpriseWebappsInsert](#androidenterprisewebappsinsert) - Creates a new web app for the enterprise.
* [androidenterpriseWebappsList](#androidenterprisewebappslist) - Retrieves the details of all web apps for a given enterprise.
* [androidenterpriseWebappsUpdate](#androidenterprisewebappsupdate) - Updates an existing web app.

## androidenterpriseWebappsDelete

Deletes an existing web app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseWebappsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseWebappsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseWebappsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->enterpriseId = 'quasi';
    $request->fields = 'animi';
    $request->key = 'nostrum';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'animi';
    $request->webAppId = 'ex';

    $requestSecurity = new AndroidenterpriseWebappsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webapps->androidenterpriseWebappsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseWebappsGet

Gets an existing web app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseWebappsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseWebappsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseWebappsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloribus';
    $request->enterpriseId = 'ullam';
    $request->fields = 'in';
    $request->key = 'nam';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'placeat';
    $request->webAppId = 'modi';

    $requestSecurity = new AndroidenterpriseWebappsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webapps->androidenterpriseWebappsGet($request, $requestSecurity);

    if ($response->webApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseWebappsInsert

Creates a new web app for the enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseWebappsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebApp;
use \OpenAPI\OpenAPI\Models\Shared\WebAppDisplayModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebAppIcon;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseWebappsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseWebappsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->webApp = new WebApp();
    $request->webApp->displayMode = WebAppDisplayModeEnum::STANDALONE;
    $request->webApp->icons = [
        new WebAppIcon(),
        new WebAppIcon(),
        new WebAppIcon(),
        new WebAppIcon(),
    ];
    $request->webApp->isPublished = false;
    $request->webApp->startUrl = 'sapiente';
    $request->webApp->title = 'Miss';
    $request->webApp->versionCode = 'vitae';
    $request->webApp->webAppId = 'rerum';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'inventore';
    $request->enterpriseId = 'fugit';
    $request->fields = 'cumque';
    $request->key = 'quae';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new AndroidenterpriseWebappsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webapps->androidenterpriseWebappsInsert($request, $requestSecurity);

    if ($response->webApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseWebappsList

Retrieves the details of all web apps for a given enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseWebappsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseWebappsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseWebappsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->enterpriseId = 'eos';
    $request->fields = 'sapiente';
    $request->key = 'eum';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new AndroidenterpriseWebappsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webapps->androidenterpriseWebappsList($request, $requestSecurity);

    if ($response->webAppsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseWebappsUpdate

Updates an existing web app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseWebappsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebApp;
use \OpenAPI\OpenAPI\Models\Shared\WebAppDisplayModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebAppIcon;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseWebappsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseWebappsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->webApp = new WebApp();
    $request->webApp->displayMode = WebAppDisplayModeEnum::FULL_SCREEN;
    $request->webApp->icons = [
        new WebAppIcon(),
        new WebAppIcon(),
        new WebAppIcon(),
    ];
    $request->webApp->isPublished = false;
    $request->webApp->startUrl = 'hic';
    $request->webApp->title = 'Dr.';
    $request->webApp->versionCode = 'eaque';
    $request->webApp->webAppId = 'earum';
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->enterpriseId = 'aliquid';
    $request->fields = 'porro';
    $request->key = 'suscipit';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'fuga';
    $request->webAppId = 'ratione';

    $requestSecurity = new AndroidenterpriseWebappsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webapps->androidenterpriseWebappsUpdate($request, $requestSecurity);

    if ($response->webApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
