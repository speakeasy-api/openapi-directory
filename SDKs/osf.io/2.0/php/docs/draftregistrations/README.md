# draftRegistrations

## Overview


A Draft Registration is a object that allows a user to edit and revise a registration before it is registered. Draft Registrations allow contributors to coordinate on a single registration, so they can upload files and change Registration metadata before the Registration is archived.

### Available Operations

* [deleteDraftRegistrationsDraftId](#deletedraftregistrationsdraftid) - Delete a draft registration
* [draftRegistrationContributorsCreate](#draftregistrationcontributorscreate) - Add a contributor to a Draft Registration
* [draftRegistrationContributorsList](#draftregistrationcontributorslist) - Retreive a list Contributors from a Draft Registration
* [draftRegistrationsCreate](#draftregistrationscreate) - Create a Draft Registration
* [draftRegistrationsRead](#draftregistrationsread) - Retrieve a list of Draft Registrations
* [getDraftRegistrationsDraftId](#getdraftregistrationsdraftid) - Retrieve a Draft Registration
* [getDraftRegistrationsDraftIdContributorsUserId](#getdraftregistrationsdraftidcontributorsuserid) - Retreive a Contributor from a Draft Registration
* [getDraftRegistrationsDraftIdInstitutions](#getdraftregistrationsdraftidinstitutions) - Retrieve Institutions afilliated with a Draft Registration
* [nodesDraftRegistrationsRead](#nodesdraftregistrationsread) - Retrieve a Draft Registration
* [nodesDraftRegistrationsSubjects](#nodesdraftregistrationssubjects) - Retrieve Subjects associated with a Draft Registration
* [patchDraftRegistrationsDraftId](#patchdraftregistrationsdraftid) - Update a Draft Registration

## deleteDraftRegistrationsDraftId

Permanently deletes a draft registration. A draft that has already been registered cannot be deleted.
#### Permissions
Only draft registration contributors with ADMIN permissions may delete draft registrations
#### Returns
If the request is successful, no content is returned.
If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDraftRegistrationsDraftIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDraftRegistrationsDraftIdRequest();
    $request->draftId = 'est';

    $response = $sdk->draftRegistrations->deleteDraftRegistrationsDraftId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## draftRegistrationContributorsCreate

Adds a contributor to a Draft Registration, contributors can view, edit, register or delete a Draft Registration depending on their permissions.
Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
#### Permissions
Only project administrators can add contributors to a Draft Registration.
#### Required
A relationship object with a `data` key, containing the `users` type and valid user ID is required.
All attributes describing the relationship between the node and the user are optional.
#### Returns
Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DraftRegistrationContributorsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DraftRegistrationContributorsCreateContributorInput;
use \OpenAPI\OpenAPI\Models\Operations\DraftRegistrationContributorsCreateContributorAttributesInput;
use \OpenAPI\OpenAPI\Models\Operations\DraftRegistrationContributorsCreateContributorAttributesPermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DraftRegistrationContributorsCreateContributorRelationshipsInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DraftRegistrationContributorsCreateRequest();
    $request->requestBody = new DraftRegistrationContributorsCreateContributorInput();
    $request->requestBody->attributes = new DraftRegistrationContributorsCreateContributorAttributesInput();
    $request->requestBody->attributes->bibliographic = false;
    $request->requestBody->attributes->index = 653140;
    $request->requestBody->attributes->permission = DraftRegistrationContributorsCreateContributorAttributesPermissionEnum::ADMIN;
    $request->requestBody->relationships = new DraftRegistrationContributorsCreateContributorRelationshipsInput();
    $request->requestBody->relationships->user = 'dolores';
    $request->draftId = 'dolorem';

    $response = $sdk->draftRegistrations->draftRegistrationContributorsCreate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## draftRegistrationContributorsList

Retrieves the details of all given Contributors for a Draft Registration.
Contributors are users who can make changes to the Draft Registration.
Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DraftRegistrationContributorsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DraftRegistrationContributorsListRequest();
    $request->draftId = 'corporis';

    $response = $sdk->draftRegistrations->draftRegistrationContributorsList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## draftRegistrationsCreate

This creates a Draft Registration that can be used to edit and register research.
Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.
A Draft Registration created by this endpoint will not have a Project linked with it by default, but if the user includes a `branched_from` attribute in their Draft Registration creation payload with the value of the `branched_from` being guid of a Project they have permissions for the Draft Registration will be linked to the Project. If you linked your Draft Registration on a Project, your original Project remains editable and will now have the Draft Registration linked to it. 
#### Permissions
Any user can create a Draft Registration. If the `branched_from` attribute is provided, then the user must be an ADMIN contributor on the Project being registered.
#### Required
Required fields for creating a Draft Registration include:

&nbsp;&nbsp;&nbsp;&nbsp;`schema_id`
#### Returns
Returns a JSON object with a `data` key containing the representation of the created Draft Registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DraftRegistrationsCreateDraftRegistrationInput;
use \OpenAPI\OpenAPI\Models\Operations\DraftRegistrationsCreateDraftRegistrationAttributesInput;
use \OpenAPI\OpenAPI\Models\Operations\DraftRegistrationsCreateDraftRegistrationAttributesNodeLicense;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DraftRegistrationsCreateDraftRegistrationInput();
    $request->attributes = new DraftRegistrationsCreateDraftRegistrationAttributesInput();
    $request->attributes->category = 'explicabo';
    $request->attributes->description = 'nobis';
    $request->attributes->nodeLicense = new DraftRegistrationsCreateDraftRegistrationAttributesNodeLicense();
    $request->attributes->nodeLicense->copyrightHolders = [
        'omnis',
        'nemo',
    ];
    $request->attributes->nodeLicense->year = 325047;
    $request->attributes->registrationMetadata = [
        'accusantium' => 'iure',
        'culpa' => 'doloribus',
        'sapiente' => 'architecto',
    ];
    $request->attributes->registrationResponses = [
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
    ];
    $request->attributes->tags = [
        'commodi',
        'quam',
    ];
    $request->attributes->title = 'Ms.';

    $response = $sdk->draftRegistrations->draftRegistrationsCreate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## draftRegistrationsRead

Retrieve a list of all currently available Draft Registrations for that user.
#### Permissions
Only Draft Registration contributors may view draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->draftRegistrations->draftRegistrationsRead();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDraftRegistrationsDraftId

Retrieve the details of a given Draft Registration
Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.

If you based your Draft Registration on a Project, your original Project remains editable but will now have the Draft Registration linked to it.
#### Permissions
Only draft registration contributors may view draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDraftRegistrationsDraftIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDraftRegistrationsDraftIdRequest();
    $request->draftId = 'velit';

    $response = $sdk->draftRegistrations->getDraftRegistrationsDraftId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDraftRegistrationsDraftIdContributorsUserId

Retrieves the details of a given contributor.

Contributors are users who can view or edit to the Draft Registrations.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDraftRegistrationsDraftIdContributorsUserIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDraftRegistrationsDraftIdContributorsUserIdRequest();
    $request->draftId = 'error';
    $request->userId = 'quia';

    $response = $sdk->draftRegistrations->getDraftRegistrationsDraftIdContributorsUserId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDraftRegistrationsDraftIdInstitutions

Once a properly authenticated user has marked their registration as affiliated with an institution, that institution and any others added will appear in this list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDraftRegistrationsDraftIdInstitutionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDraftRegistrationsDraftIdInstitutionsRequest();
    $request->draftId = 'quis';

    $response = $sdk->draftRegistrations->getDraftRegistrationsDraftIdInstitutions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## nodesDraftRegistrationsRead

Retrieve the details of a given draft registration.
Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.

Your original project remains editable but will now have the draft registration linked to it.
#### Permissions
Only project administrators may view draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NodesDraftRegistrationsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NodesDraftRegistrationsReadRequest();
    $request->draftId = 'vitae';
    $request->nodeId = 'laborum';

    $response = $sdk->draftRegistrations->nodesDraftRegistrationsRead($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## nodesDraftRegistrationsSubjects

This retrieves a list of subjects associated with a Draft Registration. Subjects are formatted here in a flat paginated list, but are hierarchical and nested by specificity of subject matter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NodesDraftRegistrationsSubjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NodesDraftRegistrationsSubjectsRequest();
    $request->draftId = 'animi';

    $response = $sdk->draftRegistrations->nodesDraftRegistrationsSubjects($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchDraftRegistrationsDraftId

Updates a Draft Registration by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged. Note this will not register or change the machine state of a Draft Registration, it can only edit the Draft Registration's attributes prior to its registration.
#### Permissions
Only draft registration contributors may view draft registrations and only draft registration contributors with WRITE or ADMIN permissions may update draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated draft registration, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchDraftRegistrationsDraftIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchDraftRegistrationsDraftIdRequest();
    $request->requestBody = [
        'odit' => 'quo',
        'sequi' => 'tenetur',
    ];
    $request->draftId = 'ipsam';

    $response = $sdk->draftRegistrations->patchDraftRegistrationsDraftId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
