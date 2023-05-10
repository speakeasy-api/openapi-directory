# invitations

### Available Operations

* [classroomInvitationsAccept](#classroominvitationsaccept) - Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.
* [classroomInvitationsCreate](#classroominvitationscreate) - Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION`: * if the requested user's account is disabled. * if the user already has this role or a role with greater permissions. * for the following request errors: * IneligibleOwner * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.
* [classroomInvitationsDelete](#classroominvitationsdelete) - Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
* [classroomInvitationsGet](#classroominvitationsget) - Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
* [classroomInvitationsList](#classroominvitationslist) - Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.

## classroomInvitationsAccept

Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsAcceptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsAcceptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomInvitationsAcceptRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'veniam';
    $request->id = 'e3d48fda-f313-4a1f-9fd9-4259c0b36f25';
    $request->key = 'debitis';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new ClassroomInvitationsAcceptSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invitations->classroomInvitationsAccept($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomInvitationsCreate

Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION`: * if the requested user's account is disabled. * if the user already has this role or a role with greater permissions. * for the following request errors: * IneligibleOwner * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Invitation;
use \OpenAPI\OpenAPI\Models\Shared\InvitationRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomInvitationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->invitation = new Invitation();
    $request->invitation->courseId = 'adipisci';
    $request->invitation->id = 'b756c11f-6c37-4a51-a624-3835bbc05a23';
    $request->invitation->role = InvitationRoleEnum::TEACHER;
    $request->invitation->userId = 'modi';
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'itaque';
    $request->fields = 'a';
    $request->key = 'quisquam';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new ClassroomInvitationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invitations->classroomInvitationsCreate($request, $requestSecurity);

    if ($response->invitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomInvitationsDelete

Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomInvitationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsa';
    $request->fields = 'nobis';
    $request->id = 'e2169e51-0019-4c6d-85e3-4762799bfbbe';
    $request->key = 'laboriosam';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ClassroomInvitationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invitations->classroomInvitationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomInvitationsGet

Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomInvitationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nam';
    $request->fields = 'incidunt';
    $request->id = 'ecae6c3d-5db3-4ade-bd5d-aea4c506a8aa';
    $request->key = 'occaecati';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new ClassroomInvitationsGetSecurity();
    $requestSecurity->option1 = new ClassroomInvitationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invitations->classroomInvitationsGet($request, $requestSecurity);

    if ($response->invitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomInvitationsList

Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomInvitationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomInvitationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->courseId = 'hic';
    $request->fields = 'nostrum';
    $request->key = 'officiis';
    $request->oauthToken = 'unde';
    $request->pageSize = 860311;
    $request->pageToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'nostrum';
    $request->userId = 'esse';

    $requestSecurity = new ClassroomInvitationsListSecurity();
    $requestSecurity->option1 = new ClassroomInvitationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invitations->classroomInvitationsList($request, $requestSecurity);

    if ($response->listInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
