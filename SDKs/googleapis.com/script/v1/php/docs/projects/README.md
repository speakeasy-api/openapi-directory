# projects

### Available Operations

* [scriptProjectsCreate](#scriptprojectscreate) - Creates a new, empty script project with no script files and a base manifest file.
* [scriptProjectsDeploymentsCreate](#scriptprojectsdeploymentscreate) - Creates a deployment of an Apps Script project.
* [scriptProjectsDeploymentsDelete](#scriptprojectsdeploymentsdelete) - Deletes a deployment of an Apps Script project.
* [scriptProjectsDeploymentsGet](#scriptprojectsdeploymentsget) - Gets a deployment of an Apps Script project.
* [scriptProjectsDeploymentsList](#scriptprojectsdeploymentslist) - Lists the deployments of an Apps Script project.
* [scriptProjectsDeploymentsUpdate](#scriptprojectsdeploymentsupdate) - Updates a deployment of an Apps Script project.
* [scriptProjectsGet](#scriptprojectsget) - Gets a script project's metadata.
* [scriptProjectsGetContent](#scriptprojectsgetcontent) - Gets the content of the script project, including the code source and metadata for each script file.
* [scriptProjectsGetMetrics](#scriptprojectsgetmetrics) - Get metrics data for scripts, such as number of executions and active users.
* [scriptProjectsUpdateContent](#scriptprojectsupdatecontent) - Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
* [scriptProjectsVersionsCreate](#scriptprojectsversionscreate) - Creates a new immutable version using the current code, with a unique version number.
* [scriptProjectsVersionsGet](#scriptprojectsversionsget) - Gets a version of a script project.
* [scriptProjectsVersionsList](#scriptprojectsversionslist) - List the versions of a script project.

## scriptProjectsCreate

Creates a new, empty script project with no script files and a base manifest file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createProjectRequest = new CreateProjectRequest();
    $request->createProjectRequest->parentId = 'est';
    $request->createProjectRequest->title = 'Miss';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new ScriptProjectsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsCreate($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsDeploymentsCreate

Creates a deployment of an Apps Script project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsDeploymentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->deploymentConfig = new DeploymentConfig();
    $request->deploymentConfig->description = 'excepturi';
    $request->deploymentConfig->manifestFileName = 'accusantium';
    $request->deploymentConfig->scriptId = 'iure';
    $request->deploymentConfig->versionNumber = 634274;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'mollitia';
    $request->key = 'dolorem';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->scriptId = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new ScriptProjectsDeploymentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsDeploymentsCreate($request, $requestSecurity);

    if ($response->deployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsDeploymentsDelete

Deletes a deployment of an Apps Script project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsDeploymentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->deploymentId = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->scriptId = 'laborum';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new ScriptProjectsDeploymentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsDeploymentsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsDeploymentsGet

Gets a deployment of an Apps Script project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsDeploymentsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->deploymentId = 'ipsam';
    $request->fields = 'id';
    $request->key = 'possimus';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->scriptId = 'error';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new ScriptProjectsDeploymentsGetSecurity();
    $requestSecurity->option1 = new ScriptProjectsDeploymentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsDeploymentsGet($request, $requestSecurity);

    if ($response->deployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsDeploymentsList

Lists the deployments of an Apps Script project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsDeploymentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 55714;
    $request->pageToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->scriptId = 'cum';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new ScriptProjectsDeploymentsListSecurity();
    $requestSecurity->option1 = new ScriptProjectsDeploymentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsDeploymentsList($request, $requestSecurity);

    if ($response->listDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsDeploymentsUpdate

Updates a deployment of an Apps Script project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsDeploymentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsDeploymentsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->updateDeploymentRequest = new UpdateDeploymentRequest();
    $request->updateDeploymentRequest->deploymentConfig = new DeploymentConfig();
    $request->updateDeploymentRequest->deploymentConfig->description = 'ut';
    $request->updateDeploymentRequest->deploymentConfig->manifestFileName = 'maiores';
    $request->updateDeploymentRequest->deploymentConfig->scriptId = 'dicta';
    $request->updateDeploymentRequest->deploymentConfig->versionNumber = 359444;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->deploymentId = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->scriptId = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new ScriptProjectsDeploymentsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsDeploymentsUpdate($request, $requestSecurity);

    if ($response->deployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsGet

Gets a script project's metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->scriptId = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new ScriptProjectsGetSecurity();
    $requestSecurity->option1 = new ScriptProjectsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsGet($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsGetContent

Gets the content of the script project, including the code source and metadata for each script file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetContentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetContentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetContentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsGetContentRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'est';
    $request->key = 'quibusdam';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->scriptId = 'distinctio';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'labore';
    $request->versionNumber = 264730;

    $requestSecurity = new ScriptProjectsGetContentSecurity();
    $requestSecurity->option1 = new ScriptProjectsGetContentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsGetContent($request, $requestSecurity);

    if ($response->content !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsGetMetrics

Get metrics data for scripts, such as number of executions and active users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetMetricsMetricsGranularityEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsGetMetricsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsGetMetricsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'perferendis';
    $request->key = 'magni';
    $request->metricsFilterDeploymentId = 'assumenda';
    $request->metricsGranularity = ScriptProjectsGetMetricsMetricsGranularityEnum::WEEKLY;
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->scriptId = 'dolorum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new ScriptProjectsGetMetricsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsGetMetrics($request, $requestSecurity);

    if ($response->metrics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsUpdateContent

Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsUpdateContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Content;
use \OpenAPI\OpenAPI\Models\Shared\File;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsScriptTypeFunctionSet;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsScriptTypeFunction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsScriptTypeUser;
use \OpenAPI\OpenAPI\Models\Shared\FileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsUpdateContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsUpdateContentRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->content = new Content();
    $request->content->files = [
        new File(),
        new File(),
        new File(),
    ];
    $request->content->scriptId = 'labore';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'eligendi';
    $request->key = 'sint';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->scriptId = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new ScriptProjectsUpdateContentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsUpdateContent($request, $requestSecurity);

    if ($response->content !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsVersionsCreate

Creates a new immutable version using the current code, with a unique version number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Version;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsVersionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->version = new Version();
    $request->version->createTime = 'debitis';
    $request->version->description = 'a';
    $request->version->scriptId = 'dolorum';
    $request->version->versionNumber = 447125;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->scriptId = 'facere';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new ScriptProjectsVersionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsVersionsCreate($request, $requestSecurity);

    if ($response->version !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsVersionsGet

Gets a version of a script project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsVersionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsVersionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsVersionsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->scriptId = 'provident';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'id';
    $request->versionNumber = 501324;

    $requestSecurity = new ScriptProjectsVersionsGetSecurity();
    $requestSecurity->option1 = new ScriptProjectsVersionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsVersionsGet($request, $requestSecurity);

    if ($response->version !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scriptProjectsVersionsList

List the versions of a script project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsVersionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsVersionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProjectsVersionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProjectsVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->key = 'vel';
    $request->oauthToken = 'natus';
    $request->pageSize = 606393;
    $request->pageToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->scriptId = 'nihil';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new ScriptProjectsVersionsListSecurity();
    $requestSecurity->option1 = new ScriptProjectsVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->scriptProjectsVersionsList($request, $requestSecurity);

    if ($response->listVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
