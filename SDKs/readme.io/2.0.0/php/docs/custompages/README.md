# customPages

### Available Operations

* [createCustomPage](#createcustompage) - Create custom page
* [deleteCustomPage](#deletecustompage) - Delete custom page
* [getCustomPage](#getcustompage) - Get custom page
* [getCustomPages](#getcustompages) - Get custom pages
* [updateCustomPage](#updatecustompage) - Update custom page

## createCustomPage

Create a new custom page inside of this project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CustomPage;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomPage();
    $request->body = 'quam';
    $request->hidden = false;
    $request->html = 'molestiae';
    $request->htmlmode = false;
    $request->title = 'Mrs.';

    $requestSecurity = new CreateCustomPageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->customPages->createCustomPage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomPage

Delete the custom page with this slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomPageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomPageRequest();
    $request->slug = 'error';

    $requestSecurity = new DeleteCustomPageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->customPages->deleteCustomPage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomPage

Returns the custom page with this slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomPageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomPageRequest();
    $request->slug = 'quia';

    $requestSecurity = new GetCustomPageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->customPages->getCustomPage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomPages

Returns a list of custom pages associated with the project API key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomPagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomPagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomPagesRequest();
    $request->page = 338007;
    $request->perPage = 110375;

    $requestSecurity = new GetCustomPagesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->customPages->getCustomPages($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomPage

Update a custom page with this slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomPageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomPage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomPageRequest();
    $request->customPage = new CustomPage();
    $request->customPage->body = 'laborum';
    $request->customPage->hidden = false;
    $request->customPage->html = 'animi';
    $request->customPage->htmlmode = false;
    $request->customPage->title = 'Mrs.';
    $request->slug = 'odit';

    $requestSecurity = new UpdateCustomPageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->customPages->updateCustomPage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
