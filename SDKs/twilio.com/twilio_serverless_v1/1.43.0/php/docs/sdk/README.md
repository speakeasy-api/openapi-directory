# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAsset](#createasset) - Create a new Asset resource.
* [createBuild](#createbuild) - Create a new Build resource. At least one function version or asset version is required.
* [createDeployment](#createdeployment) - Create a new Deployment.
* [createEnvironment](#createenvironment) - Create a new environment.
* [createFunction](#createfunction) - Create a new Function resource.
* [createService](#createservice) - Create a new Service resource.
* [createVariable](#createvariable) - Create a new Variable.
* [deleteAsset](#deleteasset) - Delete an Asset resource.
* [deleteBuild](#deletebuild) - Delete a Build resource.
* [deleteEnvironment](#deleteenvironment) - Delete a specific environment.
* [deleteFunction](#deletefunction) - Delete a Function resource.
* [deleteService](#deleteservice) - Delete a Service resource.
* [deleteVariable](#deletevariable) - Delete a specific Variable.
* [fetchAsset](#fetchasset) - Retrieve a specific Asset resource.
* [fetchAssetVersion](#fetchassetversion) - Retrieve a specific Asset Version.
* [fetchBuild](#fetchbuild) - Retrieve a specific Build resource.
* [fetchBuildStatus](#fetchbuildstatus) - Retrieve a specific Build resource.
* [fetchDeployment](#fetchdeployment) - Retrieve a specific Deployment.
* [fetchEnvironment](#fetchenvironment) - Retrieve a specific environment.
* [fetchFunction](#fetchfunction) - Retrieve a specific Function resource.
* [fetchFunctionVersion](#fetchfunctionversion) - Retrieve a specific Function Version resource.
* [fetchFunctionVersionContent](#fetchfunctionversioncontent) - Retrieve a the content of a specific Function Version resource.
* [fetchLog](#fetchlog) - Retrieve a specific log.
* [fetchService](#fetchservice) - Retrieve a specific Service resource.
* [fetchVariable](#fetchvariable) - Retrieve a specific Variable.
* [listAsset](#listasset) - Retrieve a list of all Assets.
* [listAssetVersion](#listassetversion) - Retrieve a list of all Asset Versions.
* [listBuild](#listbuild) - Retrieve a list of all Builds.
* [listDeployment](#listdeployment) - Retrieve a list of all Deployments.
* [listEnvironment](#listenvironment) - Retrieve a list of all environments.
* [listFunction](#listfunction) - Retrieve a list of all Functions.
* [listFunctionVersion](#listfunctionversion) - Retrieve a list of all Function Version resources.
* [listLog](#listlog) - Retrieve a list of all logs.
* [listService](#listservice) - Retrieve a list of all Services.
* [listVariable](#listvariable) - Retrieve a list of all Variables.
* [updateAsset](#updateasset) - Update a specific Asset resource.
* [updateFunction](#updatefunction) - Update a specific Function resource.
* [updateService](#updateservice) - Update a specific Service resource.
* [updateVariable](#updatevariable) - Update a specific Variable.

## createAsset

Create a new Asset resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetCreateAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssetRequest();
    $request->requestBody = new CreateAssetCreateAssetRequest();
    $request->requestBody->friendlyName = 'distinctio';
    $request->serviceSid = 'quibusdam';

    $requestSecurity = new CreateAssetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createAsset($request, $requestSecurity);

    if ($response->serverlessV1ServiceAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBuild

Create a new Build resource. At least one function version or asset version is required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBuildCreateBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBuildRequest();
    $request->requestBody = new CreateBuildCreateBuildRequest();
    $request->requestBody->assetVersions = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->requestBody->dependencies = 'vel';
    $request->requestBody->functionVersions = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->requestBody->runtime = 'magnam';
    $request->serviceSid = 'debitis';

    $requestSecurity = new CreateBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createBuild($request, $requestSecurity);

    if ($response->serverlessV1ServiceBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployment

Create a new Deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentCreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentRequest();
    $request->environmentSid = 'ipsa';
    $request->requestBody = new CreateDeploymentCreateDeploymentRequest();
    $request->requestBody->buildSid = 'delectus';
    $request->serviceSid = 'tempora';

    $requestSecurity = new CreateDeploymentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDeployment($request, $requestSecurity);

    if ($response->serverlessV1ServiceEnvironmentDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEnvironment

Create a new environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentCreateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentRequest();
    $request->requestBody = new CreateEnvironmentCreateEnvironmentRequest();
    $request->requestBody->domainSuffix = 'suscipit';
    $request->requestBody->uniqueName = 'molestiae';
    $request->serviceSid = 'minus';

    $requestSecurity = new CreateEnvironmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createEnvironment($request, $requestSecurity);

    if ($response->serverlessV1ServiceEnvironment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFunction

Create a new Function resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionCreateFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFunctionRequest();
    $request->requestBody = new CreateFunctionCreateFunctionRequest();
    $request->requestBody->friendlyName = 'placeat';
    $request->serviceSid = 'voluptatum';

    $requestSecurity = new CreateFunctionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createFunction($request, $requestSecurity);

    if ($response->serverlessV1ServiceFunction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

Create a new Service resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceCreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceCreateServiceRequest();
    $request->friendlyName = 'iusto';
    $request->includeCredentials = false;
    $request->uiEditable = false;
    $request->uniqueName = 'excepturi';

    $requestSecurity = new CreateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createService($request, $requestSecurity);

    if ($response->serverlessV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVariable

Create a new Variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateVariableRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVariableCreateVariableRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVariableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVariableRequest();
    $request->environmentSid = 'nisi';
    $request->requestBody = new CreateVariableCreateVariableRequest();
    $request->requestBody->key = 'recusandae';
    $request->requestBody->value = 'temporibus';
    $request->serviceSid = 'ab';

    $requestSecurity = new CreateVariableSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createVariable($request, $requestSecurity);

    if ($response->serverlessV1ServiceEnvironmentVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAsset

Delete an Asset resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssetRequest();
    $request->serviceSid = 'quis';
    $request->sid = 'veritatis';

    $requestSecurity = new DeleteAssetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteAsset($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBuild

Delete a Build resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBuildRequest();
    $request->serviceSid = 'deserunt';
    $request->sid = 'perferendis';

    $requestSecurity = new DeleteBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteBuild($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironment

Delete a specific environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentRequest();
    $request->serviceSid = 'ipsam';
    $request->sid = 'repellendus';

    $requestSecurity = new DeleteEnvironmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteEnvironment($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFunction

Delete a Function resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFunctionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFunctionRequest();
    $request->serviceSid = 'sapiente';
    $request->sid = 'quo';

    $requestSecurity = new DeleteFunctionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteFunction($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

Delete a Service resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->sid = 'odit';

    $requestSecurity = new DeleteServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteService($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVariable

Delete a specific Variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVariableRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVariableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVariableRequest();
    $request->environmentSid = 'at';
    $request->serviceSid = 'at';
    $request->sid = 'maiores';

    $requestSecurity = new DeleteVariableSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteVariable($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAsset

Retrieve a specific Asset resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAssetRequest();
    $request->serviceSid = 'molestiae';
    $request->sid = 'quod';

    $requestSecurity = new FetchAssetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAsset($request, $requestSecurity);

    if ($response->serverlessV1ServiceAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAssetVersion

Retrieve a specific Asset Version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAssetVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAssetVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAssetVersionRequest();
    $request->assetSid = 'quod';
    $request->serviceSid = 'esse';
    $request->sid = 'totam';

    $requestSecurity = new FetchAssetVersionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAssetVersion($request, $requestSecurity);

    if ($response->serverlessV1ServiceAssetAssetVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBuild

Retrieve a specific Build resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBuildRequest();
    $request->serviceSid = 'porro';
    $request->sid = 'dolorum';

    $requestSecurity = new FetchBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchBuild($request, $requestSecurity);

    if ($response->serverlessV1ServiceBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBuildStatus

Retrieve a specific Build resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBuildStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchBuildStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBuildStatusRequest();
    $request->serviceSid = 'dicta';
    $request->sid = 'nam';

    $requestSecurity = new FetchBuildStatusSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchBuildStatus($request, $requestSecurity);

    if ($response->serverlessV1ServiceBuildBuildStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDeployment

Retrieve a specific Deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeploymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDeploymentRequest();
    $request->environmentSid = 'officia';
    $request->serviceSid = 'occaecati';
    $request->sid = 'fugit';

    $requestSecurity = new FetchDeploymentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDeployment($request, $requestSecurity);

    if ($response->serverlessV1ServiceEnvironmentDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEnvironment

Retrieve a specific environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEnvironmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEnvironmentRequest();
    $request->serviceSid = 'deleniti';
    $request->sid = 'hic';

    $requestSecurity = new FetchEnvironmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEnvironment($request, $requestSecurity);

    if ($response->serverlessV1ServiceEnvironment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFunction

Retrieve a specific Function resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFunctionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFunctionRequest();
    $request->serviceSid = 'optio';
    $request->sid = 'totam';

    $requestSecurity = new FetchFunctionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFunction($request, $requestSecurity);

    if ($response->serverlessV1ServiceFunction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFunctionVersion

Retrieve a specific Function Version resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFunctionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFunctionVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFunctionVersionRequest();
    $request->functionSid = 'beatae';
    $request->serviceSid = 'commodi';
    $request->sid = 'molestiae';

    $requestSecurity = new FetchFunctionVersionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFunctionVersion($request, $requestSecurity);

    if ($response->serverlessV1ServiceFunctionFunctionVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFunctionVersionContent

Retrieve a the content of a specific Function Version resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFunctionVersionContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFunctionVersionContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFunctionVersionContentRequest();
    $request->functionSid = 'modi';
    $request->serviceSid = 'qui';
    $request->sid = 'impedit';

    $requestSecurity = new FetchFunctionVersionContentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFunctionVersionContent($request, $requestSecurity);

    if ($response->serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchLog

Retrieve a specific log.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchLogRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchLogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchLogRequest();
    $request->environmentSid = 'cum';
    $request->serviceSid = 'esse';
    $request->sid = 'ipsum';

    $requestSecurity = new FetchLogSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchLog($request, $requestSecurity);

    if ($response->serverlessV1ServiceEnvironmentLog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchService

Retrieve a specific Service resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceRequest();
    $request->sid = 'excepturi';

    $requestSecurity = new FetchServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchService($request, $requestSecurity);

    if ($response->serverlessV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchVariable

Retrieve a specific Variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchVariableRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchVariableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchVariableRequest();
    $request->environmentSid = 'aspernatur';
    $request->serviceSid = 'perferendis';
    $request->sid = 'ad';

    $requestSecurity = new FetchVariableSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchVariable($request, $requestSecurity);

    if ($response->serverlessV1ServiceEnvironmentVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAsset

Retrieve a list of all Assets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssetRequest();
    $request->page = 617636;
    $request->pageSize = 149675;
    $request->pageToken = 'iste';
    $request->serviceSid = 'dolor';

    $requestSecurity = new ListAssetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAsset($request, $requestSecurity);

    if ($response->listAssetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssetVersion

Retrieve a list of all Asset Versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssetVersionRequest();
    $request->assetSid = 'natus';
    $request->page = 386489;
    $request->pageSize = 943749;
    $request->pageToken = 'saepe';
    $request->serviceSid = 'fuga';

    $requestSecurity = new ListAssetVersionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAssetVersion($request, $requestSecurity);

    if ($response->listAssetVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBuild

Retrieve a list of all Builds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBuildRequest();
    $request->page = 449950;
    $request->pageSize = 359508;
    $request->pageToken = 'iste';
    $request->serviceSid = 'iure';

    $requestSecurity = new ListBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listBuild($request, $requestSecurity);

    if ($response->listBuildResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeployment

Retrieve a list of all Deployments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeploymentRequest();
    $request->environmentSid = 'saepe';
    $request->page = 697631;
    $request->pageSize = 99280;
    $request->pageToken = 'ipsa';
    $request->serviceSid = 'reiciendis';

    $requestSecurity = new ListDeploymentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDeployment($request, $requestSecurity);

    if ($response->listDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironment

Retrieve a list of all environments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentRequest();
    $request->page = 666767;
    $request->pageSize = 653140;
    $request->pageToken = 'laborum';
    $request->serviceSid = 'dolores';

    $requestSecurity = new ListEnvironmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEnvironment($request, $requestSecurity);

    if ($response->listEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFunction

Retrieve a list of all Functions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFunctionRequest();
    $request->page = 210382;
    $request->pageSize = 358152;
    $request->pageToken = 'explicabo';
    $request->serviceSid = 'nobis';

    $requestSecurity = new ListFunctionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFunction($request, $requestSecurity);

    if ($response->listFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFunctionVersion

Retrieve a list of all Function Version resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFunctionVersionRequest();
    $request->functionSid = 'enim';
    $request->page = 607831;
    $request->pageSize = 363711;
    $request->pageToken = 'minima';
    $request->serviceSid = 'excepturi';

    $requestSecurity = new ListFunctionVersionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFunctionVersion($request, $requestSecurity);

    if ($response->listFunctionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLog

Retrieve a list of all logs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListLogRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLogRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-24T21:51:02.112Z');
    $request->environmentSid = 'culpa';
    $request->functionSid = 'doloribus';
    $request->page = 958950;
    $request->pageSize = 102044;
    $request->pageToken = 'mollitia';
    $request->serviceSid = 'dolorem';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T05:51:25.673Z');

    $requestSecurity = new ListLogSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listLog($request, $requestSecurity);

    if ($response->listLogResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listService

Retrieve a list of all Services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceRequest();
    $request->page = 995300;
    $request->pageSize = 653108;
    $request->pageToken = 'occaecati';

    $requestSecurity = new ListServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listService($request, $requestSecurity);

    if ($response->listServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVariable

Retrieve a list of all Variables.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVariableRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVariableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVariableRequest();
    $request->environmentSid = 'numquam';
    $request->page = 414369;
    $request->pageSize = 466311;
    $request->pageToken = 'molestiae';
    $request->serviceSid = 'velit';

    $requestSecurity = new ListVariableSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listVariable($request, $requestSecurity);

    if ($response->listVariableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAsset

Update a specific Asset resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetUpdateAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssetRequest();
    $request->requestBody = new UpdateAssetUpdateAssetRequest();
    $request->requestBody->friendlyName = 'error';
    $request->serviceSid = 'quia';
    $request->sid = 'quis';

    $requestSecurity = new UpdateAssetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateAsset($request, $requestSecurity);

    if ($response->serverlessV1ServiceAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFunction

Update a specific Function resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionUpdateFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFunctionRequest();
    $request->requestBody = new UpdateFunctionUpdateFunctionRequest();
    $request->requestBody->friendlyName = 'vitae';
    $request->serviceSid = 'laborum';
    $request->sid = 'animi';

    $requestSecurity = new UpdateFunctionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateFunction($request, $requestSecurity);

    if ($response->serverlessV1ServiceFunction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

Update a specific Service resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->requestBody = new UpdateServiceUpdateServiceRequest();
    $request->requestBody->friendlyName = 'enim';
    $request->requestBody->includeCredentials = false;
    $request->requestBody->uiEditable = false;
    $request->sid = 'odit';

    $requestSecurity = new UpdateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateService($request, $requestSecurity);

    if ($response->serverlessV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVariable

Update a specific Variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVariableRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVariableUpdateVariableRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVariableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVariableRequest();
    $request->environmentSid = 'quo';
    $request->requestBody = new UpdateVariableUpdateVariableRequest();
    $request->requestBody->key = 'sequi';
    $request->requestBody->value = 'tenetur';
    $request->serviceSid = 'ipsam';
    $request->sid = 'id';

    $requestSecurity = new UpdateVariableSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateVariable($request, $requestSecurity);

    if ($response->serverlessV1ServiceEnvironmentVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
