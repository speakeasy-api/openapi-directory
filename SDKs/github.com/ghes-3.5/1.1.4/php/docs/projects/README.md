# projects

## Overview

Interact with GitHub Projects.

### Available Operations

* [projectsAddCollaborator](#projectsaddcollaborator) - Add project collaborator
* [projectsCreateCard](#projectscreatecard) - Create a project card
* [projectsCreateColumn](#projectscreatecolumn) - Create a project column
* [projectsCreateForAuthenticatedUser](#projectscreateforauthenticateduser) - Create a user project
* [projectsCreateForOrg](#projectscreatefororg) - Create an organization project
* [projectsCreateForRepo](#projectscreateforrepo) - Create a repository project
* [projectsDelete](#projectsdelete) - Delete a project
* [projectsDeleteCard](#projectsdeletecard) - Delete a project card
* [projectsDeleteColumn](#projectsdeletecolumn) - Delete a project column
* [projectsGet](#projectsget) - Get a project
* [projectsGetCard](#projectsgetcard) - Get a project card
* [projectsGetColumn](#projectsgetcolumn) - Get a project column
* [projectsGetPermissionForUser](#projectsgetpermissionforuser) - Get project permission for a user
* [projectsListCards](#projectslistcards) - List project cards
* [projectsListCollaborators](#projectslistcollaborators) - List project collaborators
* [projectsListColumns](#projectslistcolumns) - List project columns
* [projectsListForOrg](#projectslistfororg) - List organization projects
* [projectsListForRepo](#projectslistforrepo) - List repository projects
* [projectsListForUser](#projectslistforuser) - List user projects
* [projectsMoveCard](#projectsmovecard) - Move a project card
* [projectsMoveColumn](#projectsmovecolumn) - Move a project column
* [projectsRemoveCollaborator](#projectsremovecollaborator) - Remove user as a collaborator
* [projectsUpdate](#projectsupdate) - Update a project
* [projectsUpdateCard](#projectsupdatecard) - Update an existing project card
* [projectsUpdateColumn](#projectsupdatecolumn) - Update an existing project column

## projectsAddCollaborator

Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#add-project-collaborator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsAddCollaboratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsAddCollaboratorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsAddCollaboratorRequestBodyPermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsAddCollaboratorRequest();
    $request->requestBody = new ProjectsAddCollaboratorRequestBody();
    $request->requestBody->permission = ProjectsAddCollaboratorRequestBodyPermissionEnum::WRITE;
    $request->projectId = 172195;
    $request->username = 'Lilliana.Bogan';

    $response = $sdk->projects->projectsAddCollaborator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsCreateCard

Create a project card

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#create-a-project-card>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsCreateCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsCreateCardRequest();
    $request->requestBody = new ProjectsCreateCardRequestBody2();
    $request->requestBody->contentId = 42;
    $request->requestBody->contentType = 'PullRequest';
    $request->columnId = 932666;

    $response = $sdk->projects->projectsCreateCard($request);

    if ($response->projectCard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsCreateColumn

Create a project column

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#create-a-project-column>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsCreateColumnRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsCreateColumnRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsCreateColumnRequest();
    $request->requestBody = new ProjectsCreateColumnRequestBody();
    $request->requestBody->name = 'Remaining tasks';
    $request->projectId = 627735;

    $response = $sdk->projects->projectsCreateColumn($request);

    if ($response->projectColumn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsCreateForAuthenticatedUser

Creates a user project board. Returns a `410 Gone` status if the user does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#create-a-user-project>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsCreateForAuthenticatedUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsCreateForAuthenticatedUserRequestBody();
    $request->body = 'This project represents the sprint of the first week in January';
    $request->name = 'Week One Sprint';

    $response = $sdk->projects->projectsCreateForAuthenticatedUser($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsCreateForOrg

Creates an organization project board. Returns a `410 Gone` status if projects are disabled in the organization or if the organization does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#create-an-organization-project>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsCreateForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsCreateForOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsCreateForOrgRequest();
    $request->requestBody = new ProjectsCreateForOrgRequestBody();
    $request->requestBody->body = 'optio';
    $request->requestBody->name = 'Bertha Johnson';
    $request->org = 'quidem';

    $response = $sdk->projects->projectsCreateForOrg($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsCreateForRepo

Creates a repository project board. Returns a `410 Gone` status if projects are disabled in the repository or if the repository does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#create-a-repository-project>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsCreateForRepoRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsCreateForRepoRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsCreateForRepoRequest();
    $request->requestBody = new ProjectsCreateForRepoRequestBody();
    $request->requestBody->body = 'exercitationem';
    $request->requestBody->name = 'Ms. Connie Gleason';
    $request->owner = 'sequi';
    $request->repo = 'repudiandae';

    $response = $sdk->projects->projectsCreateForRepo($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsDelete

Deletes a project board. Returns a `404 Not Found` status if projects are disabled.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#delete-a-project>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsDeleteRequest();
    $request->projectId = 741232;

    $response = $sdk->projects->projectsDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsDeleteCard

Delete a project card

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#delete-a-project-card>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsDeleteCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsDeleteCardRequest();
    $request->cardId = 120120;

    $response = $sdk->projects->projectsDeleteCard($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsDeleteColumn

Delete a project column

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#delete-a-project-column>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsDeleteColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsDeleteColumnRequest();
    $request->columnId = 936928;

    $response = $sdk->projects->projectsDeleteColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsGet

Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#get-a-project>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsGetRequest();
    $request->projectId = 334474;

    $response = $sdk->projects->projectsGet($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsGetCard

Get a project card

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#get-a-project-card>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsGetCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsGetCardRequest();
    $request->cardId = 659268;

    $response = $sdk->projects->projectsGetCard($request);

    if ($response->projectCard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsGetColumn

Get a project column

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#get-a-project-column>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsGetColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsGetColumnRequest();
    $request->columnId = 175372;

    $response = $sdk->projects->projectsGetColumn($request);

    if ($response->projectColumn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsGetPermissionForUser

Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#get-project-permission-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsGetPermissionForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsGetPermissionForUserRequest();
    $request->projectId = 724994;
    $request->username = 'Betty_Cruickshank5';

    $response = $sdk->projects->projectsGetPermissionForUser($request);

    if ($response->projectCollaboratorPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsListCards

List project cards

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#list-project-cards>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListCardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListCardsArchivedStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsListCardsRequest();
    $request->archivedState = ProjectsListCardsArchivedStateEnum::ARCHIVED;
    $request->columnId = 980486;
    $request->page = 87382;
    $request->perPage = 96450;

    $response = $sdk->projects->projectsListCards($request);

    if ($response->projectCards !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsListCollaborators

Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#list-project-collaborators>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListCollaboratorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListCollaboratorsAffiliationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsListCollaboratorsRequest();
    $request->affiliation = ProjectsListCollaboratorsAffiliationEnum::DIRECT;
    $request->page = 863471;
    $request->perPage = 729448;
    $request->projectId = 566506;

    $response = $sdk->projects->projectsListCollaborators($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsListColumns

List project columns

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#list-project-columns>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListColumnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsListColumnsRequest();
    $request->page = 578210;
    $request->perPage = 367917;
    $request->projectId = 306382;

    $response = $sdk->projects->projectsListColumns($request);

    if ($response->projectColumns !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsListForOrg

Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#list-organization-projects>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListForOrgStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsListForOrgRequest();
    $request->org = 'nostrum';
    $request->page = 988749;
    $request->perPage = 757364;
    $request->state = ProjectsListForOrgStateEnum::CLOSED;

    $response = $sdk->projects->projectsListForOrg($request);

    if ($response->projects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsListForRepo

Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#list-repository-projects>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListForRepoRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListForRepoStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsListForRepoRequest();
    $request->owner = 'enim';
    $request->page = 944950;
    $request->perPage = 657319;
    $request->repo = 'quas';
    $request->state = ProjectsListForRepoStateEnum::CLOSED;

    $response = $sdk->projects->projectsListForRepo($request);

    if ($response->projects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsListForUser

List user projects

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#list-user-projects>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListForUserStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsListForUserRequest();
    $request->page = 564667;
    $request->perPage = 484966;
    $request->state = ProjectsListForUserStateEnum::OPEN;
    $request->username = 'Stephanie_Braun';

    $response = $sdk->projects->projectsListForUser($request);

    if ($response->projects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsMoveCard

Move a project card

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#move-a-project-card>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsMoveCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsMoveCardRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsMoveCardRequest();
    $request->requestBody = new ProjectsMoveCardRequestBody();
    $request->requestBody->columnId = 42;
    $request->requestBody->position = 'bottom';
    $request->cardId = 826862;

    $response = $sdk->projects->projectsMoveCard($request);

    if ($response->projectsMoveCard201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsMoveColumn

Move a project column

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#move-a-project-column>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsMoveColumnRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsMoveColumnRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsMoveColumnRequest();
    $request->requestBody = new ProjectsMoveColumnRequestBody();
    $request->requestBody->position = 'last';
    $request->columnId = 731634;

    $response = $sdk->projects->projectsMoveColumn($request);

    if ($response->projectsMoveColumn201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsRemoveCollaborator

Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#remove-project-collaborator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsRemoveCollaboratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsRemoveCollaboratorRequest();
    $request->projectId = 725574;
    $request->username = 'Dee_Batz74';

    $response = $sdk->projects->projectsRemoveCollaborator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsUpdate

Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#update-a-project>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsUpdateRequestBodyOrganizationPermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsUpdateRequest();
    $request->requestBody = new ProjectsUpdateRequestBody();
    $request->requestBody->body = 'This project represents the sprint of the first week in January';
    $request->requestBody->name = 'Week One Sprint';
    $request->requestBody->organizationPermission = ProjectsUpdateRequestBodyOrganizationPermissionEnum::READ;
    $request->requestBody->private = false;
    $request->requestBody->state = 'open';
    $request->projectId = 238011;

    $response = $sdk->projects->projectsUpdate($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsUpdateCard

Update an existing project card

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#update-a-project-card>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsUpdateCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsUpdateCardRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsUpdateCardRequest();
    $request->requestBody = new ProjectsUpdateCardRequestBody();
    $request->requestBody->archived = false;
    $request->requestBody->note = 'Update all gems';
    $request->cardId = 903150;

    $response = $sdk->projects->projectsUpdateCard($request);

    if ($response->projectCard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsUpdateColumn

Update an existing project column

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/projects#update-a-project-column>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsUpdateColumnRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsUpdateColumnRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsUpdateColumnRequest();
    $request->requestBody = new ProjectsUpdateColumnRequestBody();
    $request->requestBody->name = 'Remaining tasks';
    $request->columnId = 644420;

    $response = $sdk->projects->projectsUpdateColumn($request);

    if ($response->projectColumn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
