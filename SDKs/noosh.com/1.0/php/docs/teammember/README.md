# teamMember

### Available Operations

* [deleteTeamMemberOfProject](#deleteteammemberofproject) - Delete a team member for the specific project.
* [getTeamMemberListOfClientProject](#getteammemberlistofclientproject) - List team member of client project side.
* [getTeamMemberListOfProject](#getteammemberlistofproject) - List team member of project.
* [postTeamMemberOfProjectJson](#postteammemberofprojectjson) - Invite a team member or all the members of team template for the specific project.
* [postTeamMemberOfProjectRaw](#postteammemberofprojectraw) - Invite a team member or all the members of team template for the specific project.
* [postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJson](#postv1workgroupsworkgroupidprojectsprojectidteammembersjson) - Deprecated, please use 1.1 Version
* [postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRaw](#postv1workgroupsworkgroupidprojectsprojectidteammembersraw) - Deprecated, please use 1.1 Version

## deleteTeamMemberOfProject

Delete a team member for the specific project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTeamMemberOfProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTeamMemberOfProjectRequest();
    $request->projectId = 'odit';
    $request->teammemberId = 'nemo';
    $request->workgroupId = 'quasi';

    $response = $sdk->teamMember->deleteTeamMemberOfProject($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMemberListOfClientProject

List team member of client project side.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMemberListOfClientProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMemberListOfClientProjectRequest();
    $request->projectId = 'iure';
    $request->workgroupId = 'doloribus';

    $response = $sdk->teamMember->getTeamMemberListOfClientProject($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMemberListOfProject

List team member of project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMemberListOfProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMemberListOfProjectRequest();
    $request->projectId = 'debitis';
    $request->workgroupId = 'eius';

    $response = $sdk->teamMember->getTeamMemberListOfProject($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTeamMemberOfProjectJson

Invite a team member or all the members of team template for the specific project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostTeamMemberOfProjectJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TeamMemberPO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTeamMemberOfProjectJsonRequest();
    $request->teamMemberPO = new TeamMemberPO();
    $request->teamMemberPO->roleId = 1;
    $request->teamMemberPO->teamTemplateId = 1;
    $request->teamMemberPO->userId = 1;
    $request->projectId = 'maxime';
    $request->workgroupId = 'deleniti';

    $response = $sdk->teamMember->postTeamMemberOfProjectJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTeamMemberOfProjectRaw

Invite a team member or all the members of team template for the specific project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostTeamMemberOfProjectRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTeamMemberOfProjectRawRequest();
    $request->requestBody = 'facilis';
    $request->projectId = 'in';
    $request->workgroupId = 'architecto';

    $response = $sdk->teamMember->postTeamMemberOfProjectRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJson

Deprecated, please use 1.1 Version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactUserVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonRequest();
    $request->contactUserVO = new ContactUserVO();
    $request->contactUserVO->roleId = 1;
    $request->contactUserVO->userId = 1;
    $request->projectId = 'architecto';
    $request->workgroupId = 'repudiandae';

    $response = $sdk->teamMember->postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRaw

Deprecated, please use 1.1 Version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawRequest();
    $request->requestBody = 'ullam';
    $request->projectId = 'expedita';
    $request->workgroupId = 'nihil';

    $response = $sdk->teamMember->postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
