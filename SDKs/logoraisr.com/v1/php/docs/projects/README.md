# projects

### Available Operations

* [projectsCreate](#projectscreate) - Create a new project.
* [projectsList](#projectslist) - Get user project list.
* [projectsRead](#projectsread) - Get project details.

## projectsCreate

This POST-Method creates a new project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\Process;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectRequest();
    $request->fileId = 'bd9d8d69-a674-4e0f-867c-c8796ed151a0';
    $request->process = new Process();
    $request->process->crop = 'ipsam';
    $request->process->flip = false;
    $request->process->mirror = false;
    $request->process->processingAlgorithm = 'repellendus';
    $request->process->resize = 'sapiente';
    $request->process->rotate = 778157;
    $request->projectTitle = 'odit';

    $response = $sdk->projects->projectsCreate($request);

    if ($response->projectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsList

This GET-Method lists the user's projects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->projects->projectsList();

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsRead

This GET-Method returns a specific project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsReadRequest();
    $request->projectNumber = 'at';

    $response = $sdk->projects->projectsRead($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
