# changelog

### Available Operations

* [createChangelog](#createchangelog) - Create changelog
* [deleteChangelog](#deletechangelog) - Delete changelog
* [getChangelog](#getchangelog) - Get changelog
* [getChangelogs](#getchangelogs) - Get changelogs
* [updateChangelog](#updatechangelog) - Update changelog

## createChangelog

Create a new changelog inside of this project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Changelog;
use \OpenAPI\OpenAPI\Models\Shared\ChangelogTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateChangelogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Changelog();
    $request->body = 'sapiente';
    $request->hidden = false;
    $request->title = 'Mr.';
    $request->type = ChangelogTypeEnum::IMPROVED;

    $requestSecurity = new CreateChangelogSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->changelog->createChangelog($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteChangelog

Delete the changelog with this slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChangelogRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChangelogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChangelogRequest();
    $request->slug = 'dolorem';

    $requestSecurity = new DeleteChangelogSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->changelog->deleteChangelog($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChangelog

Returns the changelog with this slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChangelogRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetChangelogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChangelogRequest();
    $request->slug = 'culpa';

    $requestSecurity = new GetChangelogSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->changelog->getChangelog($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChangelogs

Returns a list of changelogs associated with the project API key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChangelogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetChangelogsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChangelogsRequest();
    $request->page = 161309;
    $request->perPage = 995300;

    $requestSecurity = new GetChangelogsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->changelog->getChangelogs($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateChangelog

Update a changelog with this slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChangelogRequest;
use \OpenAPI\OpenAPI\Models\Shared\Changelog;
use \OpenAPI\OpenAPI\Models\Shared\ChangelogTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChangelogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateChangelogRequest();
    $request->changelog = new Changelog();
    $request->changelog->body = 'mollitia';
    $request->changelog->hidden = false;
    $request->changelog->title = 'Ms.';
    $request->changelog->type = ChangelogTypeEnum::ADDED;
    $request->slug = 'commodi';

    $requestSecurity = new UpdateChangelogSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->changelog->updateChangelog($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
