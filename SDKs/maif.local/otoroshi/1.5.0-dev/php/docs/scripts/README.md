# scripts

## Overview

Everything about Otoroshi request transformer scripts

### Available Operations

* [compileScript](#compilescript) - Compile a script
* [createScript](#createscript) - Create a new script
* [deleteScript](#deletescript) - Delete a script
* [findAllScripts](#findallscripts) - Get all scripts
* [findScriptById](#findscriptbyid) - Get a script
* [patchScript](#patchscript) - Update a script with a diff
* [updateScript](#updatescript) - Update a script

## compileScript

Compile a script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Script;
use \OpenAPI\OpenAPI\Models\Operations\CompileScriptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Script();
    $request->code = [
        'distinctio' => 'quod',
    ];
    $request->desc = [
        'inventore' => 'nihil',
        'totam' => 'accusamus',
    ];
    $request->id = 'a string value';
    $request->name = 'a string value';

    $requestSecurity = new CompileScriptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->scripts->compileScript($request, $requestSecurity);

    if ($response->scriptCompilationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScript

Create a new script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Script;
use \OpenAPI\OpenAPI\Models\Operations\CreateScriptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Script();
    $request->code = [
        'odio' => 'occaecati',
        'commodi' => 'sapiente',
    ];
    $request->desc = [
        'deserunt' => 'molestiae',
    ];
    $request->id = 'a string value';
    $request->name = 'a string value';

    $requestSecurity = new CreateScriptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->scripts->createScript($request, $requestSecurity);

    if ($response->script !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScript

Delete a script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScriptRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScriptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScriptRequest();
    $request->scriptId = 'accusantium';

    $requestSecurity = new DeleteScriptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->scripts->deleteScript($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findAllScripts

Get all scripts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindAllScriptsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FindAllScriptsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->scripts->findAllScripts($requestSecurity);

    if ($response->scripts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findScriptById

Get a script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindScriptByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindScriptByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindScriptByIdRequest();
    $request->scriptId = 'porro';

    $requestSecurity = new FindScriptByIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->scripts->findScriptById($request, $requestSecurity);

    if ($response->script !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchScript

Update a script with a diff

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchScriptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchScriptRequest();
    $request->requestBody = [
        new Patch(),
        new Patch(),
    ];
    $request->scriptId = 'quas';

    $requestSecurity = new PatchScriptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->scripts->patchScript($request, $requestSecurity);

    if ($response->script !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateScript

Update a script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\Script;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScriptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateScriptRequest();
    $request->script = new Script();
    $request->script->code = [
        'consequuntur' => 'deleniti',
        'fugit' => 'fuga',
        'mollitia' => 'incidunt',
    ];
    $request->script->desc = [
        'explicabo' => 'minima',
        'nisi' => 'fugit',
        'sapiente' => 'consequuntur',
    ];
    $request->script->id = 'a string value';
    $request->script->name = 'a string value';
    $request->scriptId = 'ratione';

    $requestSecurity = new UpdateScriptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->scripts->updateScript($request, $requestSecurity);

    if ($response->script !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
