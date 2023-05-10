# developersFindAndModifyDevelopers

### Available Operations

* [deleteDevelopersDeveloperId](#deletedevelopersdeveloperid) - Removes a single developer
* [getDevelopers](#getdevelopers) - Returns a paginated list of developers
* [getDevelopersDeveloperId](#getdevelopersdeveloperid) - Returns a single developer
* [patchDevelopersDeveloperId](#patchdevelopersdeveloperid) - Updates the developer fields
* [postDevelopersDeveloperId](#postdevelopersdeveloperid) - Updates the developer record or adds the developer if it doesn't exist

## deleteDevelopersDeveloperId

Removes a single developer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDevelopersDeveloperIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDevelopersDeveloperIdRequest();
    $request->developerId = 'aut';

    $response = $sdk->developersFindAndModifyDevelopers->deleteDevelopersDeveloperId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevelopers

- Results are paginated and the default is value is 100 if no limit is provided


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevelopersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevelopersRequest();
    $request->limit = 97101;
    $request->pageNumber = 622846;
    $request->query = 'temporibus';
    $request->sort = 'laborum';

    $response = $sdk->developersFindAndModifyDevelopers->getDevelopers($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevelopersDeveloperId

Returns a single developer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevelopersDeveloperIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevelopersDeveloperIdRequest();
    $request->developerId = 'quasi';

    $response = $sdk->developersFindAndModifyDevelopers->getDevelopersDeveloperId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchDevelopersDeveloperId

Updates the developer fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchDevelopersDeveloperIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchDevelopersDeveloperIdRequest();
    $request->customData = 'reiciendis';
    $request->developerId = 'voluptatibus';
    $request->email = 'Jane.Langosh60@hotmail.com';
    $request->name = 'Ms. Karla Aufderhar';
    $request->type = 'maiores';
    $request->username = 'Blanche48';

    $response = $sdk->developersFindAndModifyDevelopers->patchDevelopersDeveloperId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDevelopersDeveloperId

Updates the developer record or adds the developer if it doesn't exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostDevelopersDeveloperIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostDevelopersDeveloperIdRequest();
    $request->customData = 'dicta';
    $request->developerId = 'harum';
    $request->email = 'Shania.Jerde21@gmail.com';
    $request->name = 'Virgil Mante';
    $request->type = 'praesentium';
    $request->username = 'Judah92';

    $response = $sdk->developersFindAndModifyDevelopers->postDevelopersDeveloperId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
