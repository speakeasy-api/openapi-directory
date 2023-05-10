# storyCollaborators

## Overview

Story Collaborators

### Available Operations

* [storyIdCollaboratorsGet](#storyidcollaboratorsget) - Story Collaborators: List
* [storyIdCollaboratorsInactivePost](#storyidcollaboratorsinactivepost) - Story Collaborators: Edit Inactive User Permission
* [storyIdCollaboratorsPost](#storyidcollaboratorspost) - Story Collaborators: Add New User
* [storyIdCollaboratorsUseridDelete](#storyidcollaboratorsuseriddelete) - Story Collaborators: Remove User
* [storyIdCollaboratorsUseridGet](#storyidcollaboratorsuseridget) - Story Collaborators: Access Permissions
* [storyIdCollaboratorsUseridPut](#storyidcollaboratorsuseridput) - Story Collaborators: Edit Access Rights

## storyIdCollaboratorsGet

Gets a list users that can read or edit this story

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdCollaboratorsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdCollaboratorsGetRequest();
    $request->id = '04f3b119-4b8a-4bf6-83a7-9f9dfe0ab7da';

    $response = $sdk->storyCollaborators->storyIdCollaboratorsGet($request);

    if ($response->storyCollaborators !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdCollaboratorsInactivePost

Edit story permissions for inactive users.  Requires admin rights.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdCollaboratorsInactivePostRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyInactiveCollaborator;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdCollaboratorsInactivePostRequest();
    $request->id = '8a50ce18-7f86-4bc1-b3d6-89eee9526f8d';
    $request->modifyInactiveCollaborator = new ModifyInactiveCollaborator();
    $request->modifyInactiveCollaborator->action = 'error';
    $request->modifyInactiveCollaborator->leadId = 502721;
    $request->modifyInactiveCollaborator->userId = '6e881ead-4f0e-4101-a563-f94e29e973e9';

    $response = $sdk->storyCollaborators->storyIdCollaboratorsInactivePost($request);

    if ($response->storyCollaborator !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdCollaboratorsPost

Add a colloborator to this story

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdCollaboratorsPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddNewCollaboratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdCollaboratorsPostRequest();
    $request->addNewCollaboratorRequest = new AddNewCollaboratorRequest();
    $request->addNewCollaboratorRequest->collaboratorType = 'consequuntur';
    $request->addNewCollaboratorRequest->userEmail = 'fugit';
    $request->addNewCollaboratorRequest->userId = 'a57a15be-3e06-4080-be2b-6e3ab8845f05';
    $request->id = '97a60ff2-a54a-431e-9476-4a3e865e7956';

    $response = $sdk->storyCollaborators->storyIdCollaboratorsPost($request);

    if ($response->storyCollaborator !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdCollaboratorsUseridDelete

Remove a collaborator from this story

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdCollaboratorsUseridDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdCollaboratorsUseridDeleteRequest();
    $request->id = 'f9251a5a-9da6-460f-b57b-faad4f9efc1b';
    $request->storyCollaboratorUserid = '4512c103-2648-4dc2-b615-199ebfd0e9fe';

    $response = $sdk->storyCollaborators->storyIdCollaboratorsUseridDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdCollaboratorsUseridGet

Data to help you understand the access rights of a particular collaborator on this story

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdCollaboratorsUseridGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdCollaboratorsUseridGetRequest();
    $request->id = '6c632ca3-aed0-4117-9963-12fde0477177';
    $request->storyCollaboratorUserid = '8ff61d01-7476-4360-a15d-b6a660659a1a';

    $response = $sdk->storyCollaborators->storyIdCollaboratorsUseridGet($request);

    if ($response->storyCollaborator !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdCollaboratorsUseridPut

Modify a user's access right to this story (e.g., grant edit permissions)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdCollaboratorsUseridPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\StoryCollaborator;
use \OpenAPI\OpenAPI\Models\Shared\PermissionType;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdCollaboratorsUseridPutRequest();
    $request->id = 'deaab585-1d6c-4645-b08b-61891baa0fe1';
    $request->storyCollaborator = new StoryCollaborator();
    $request->storyCollaborator->active = false;
    $request->storyCollaborator->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-07T23:13:52.948Z');
    $request->storyCollaborator->createdBy = 'e008e6f8-c5f3-450d-8cdb-5a3418143010';
    $request->storyCollaborator->email = 'Buford.Bergstrom@gmail.com';
    $request->storyCollaborator->id = '3d5208ec-e7e2-453b-a684-51c6c6e205e1';
    $request->storyCollaborator->leadId = 392569;
    $request->storyCollaborator->name = 'Caleb Orn';
    $request->storyCollaborator->permissionType = new PermissionType();
    $request->storyCollaborator->permissionType->canAddCollaborators = false;
    $request->storyCollaborator->permissionType->canDelete = false;
    $request->storyCollaborator->permissionType->canEdit = false;
    $request->storyCollaborator->permissionType->canView = false;
    $request->storyCollaborator->permissionType->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-31T16:32:36.866Z');
    $request->storyCollaborator->permissionType->createdBy = 'c9578a64-5842-473a-8418-d162309fb092';
    $request->storyCollaborator->permissionType->id = '9921aefb-9f58-4c4d-86e6-8e4be056013f';
    $request->storyCollaborator->permissionType->name = 'Bobbie Stokes';
    $request->storyCollaborator->permissionType->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-22T17:24:54.812Z');
    $request->storyCollaborator->permissionType->updatedBy = 'a59ecfef-66ef-41ca-a338-3c2beb477373';
    $request->storyCollaborator->permissionTypeId = 'c8d72f64-d1db-41f2-8431-0661e96349e1';
    $request->storyCollaborator->storyId = 'cf9e06e3-a437-4000-ae6b-6bc9b8f759ea';
    $request->storyCollaborator->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-18T12:30:52.334Z');
    $request->storyCollaborator->updatedBy = '5a9741d3-1135-4296-9bb8-a7202611435e';
    $request->storyCollaborator->userId = '139dbc22-59b1-4abd-a8c0-70e1084cb067';
    $request->storyCollaboratorUserid = '2d1ad879-eeb9-4665-b85e-fbd02bae0be2';

    $response = $sdk->storyCollaborators->storyIdCollaboratorsUseridPut($request);

    if ($response->storyCollaborator !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
