# userProfiles

### Available Operations

* [classroomUserProfilesGet](#classroomuserprofilesget) - Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.
* [classroomUserProfilesGuardianInvitationsCreate](#classroomuserprofilesguardianinvitationscreate) - Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.
* [classroomUserProfilesGuardianInvitationsGet](#classroomuserprofilesguardianinvitationsget) - Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.
* [classroomUserProfilesGuardianInvitationsList](#classroomuserprofilesguardianinvitationslist) - Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.
* [classroomUserProfilesGuardianInvitationsPatch](#classroomuserprofilesguardianinvitationspatch) - Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.
* [classroomUserProfilesGuardiansDelete](#classroomuserprofilesguardiansdelete) - Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.
* [classroomUserProfilesGuardiansGet](#classroomuserprofilesguardiansget) - Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.
* [classroomUserProfilesGuardiansList](#classroomuserprofilesguardianslist) - Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

## classroomUserProfilesGet

Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomUserProfilesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maiores';
    $request->fields = 'alias';
    $request->key = 'asperiores';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'earum';
    $request->userId = 'doloribus';

    $requestSecurity = new ClassroomUserProfilesGetSecurity();
    $requestSecurity->option1 = new ClassroomUserProfilesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userProfiles->classroomUserProfilesGet($request, $requestSecurity);

    if ($response->userProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomUserProfilesGuardianInvitationsCreate

Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuardianInvitation;
use \OpenAPI\OpenAPI\Models\Shared\GuardianInvitationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomUserProfilesGuardianInvitationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->guardianInvitation = new GuardianInvitation();
    $request->guardianInvitation->creationTime = 'eius';
    $request->guardianInvitation->invitationId = 'esse';
    $request->guardianInvitation->invitedEmailAddress = 'in';
    $request->guardianInvitation->state = GuardianInvitationStateEnum::COMPLETE;
    $request->guardianInvitation->studentId = 'quasi';
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'qui';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->studentId = 'incidunt';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new ClassroomUserProfilesGuardianInvitationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userProfiles->classroomUserProfilesGuardianInvitationsCreate($request, $requestSecurity);

    if ($response->guardianInvitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomUserProfilesGuardianInvitationsGet

Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomUserProfilesGuardianInvitationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'vel';
    $request->invitationId = 'accusantium';
    $request->key = 'id';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->studentId = 'quas';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new ClassroomUserProfilesGuardianInvitationsGetSecurity();
    $requestSecurity->option1 = new ClassroomUserProfilesGuardianInvitationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userProfiles->classroomUserProfilesGuardianInvitationsGet($request, $requestSecurity);

    if ($response->guardianInvitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomUserProfilesGuardianInvitationsList

Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsListStatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomUserProfilesGuardianInvitationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quam';
    $request->fields = 'magni';
    $request->invitedEmailAddress = 'deserunt';
    $request->key = 'delectus';
    $request->oauthToken = 'omnis';
    $request->pageSize = 151230;
    $request->pageToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->states = [
        ClassroomUserProfilesGuardianInvitationsListStatesEnum::PENDING,
        ClassroomUserProfilesGuardianInvitationsListStatesEnum::GUARDIAN_INVITATION_STATE_UNSPECIFIED,
    ];
    $request->studentId = 'excepturi';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new ClassroomUserProfilesGuardianInvitationsListSecurity();
    $requestSecurity->option1 = new ClassroomUserProfilesGuardianInvitationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userProfiles->classroomUserProfilesGuardianInvitationsList($request, $requestSecurity);

    if ($response->listGuardianInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomUserProfilesGuardianInvitationsPatch

Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuardianInvitation;
use \OpenAPI\OpenAPI\Models\Shared\GuardianInvitationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardianInvitationsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomUserProfilesGuardianInvitationsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->guardianInvitation = new GuardianInvitation();
    $request->guardianInvitation->creationTime = 'reiciendis';
    $request->guardianInvitation->invitationId = 'amet';
    $request->guardianInvitation->invitedEmailAddress = 'nemo';
    $request->guardianInvitation->state = GuardianInvitationStateEnum::GUARDIAN_INVITATION_STATE_UNSPECIFIED;
    $request->guardianInvitation->studentId = 'quisquam';
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'aliquid';
    $request->invitationId = 'asperiores';
    $request->key = 'a';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'perspiciatis';
    $request->studentId = 'accusantium';
    $request->updateMask = 'dicta';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new ClassroomUserProfilesGuardianInvitationsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userProfiles->classroomUserProfilesGuardianInvitationsPatch($request, $requestSecurity);

    if ($response->guardianInvitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomUserProfilesGuardiansDelete

Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomUserProfilesGuardiansDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'modi';
    $request->guardianId = 'voluptates';
    $request->key = 'fugit';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->studentId = 'eligendi';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new ClassroomUserProfilesGuardiansDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userProfiles->classroomUserProfilesGuardiansDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomUserProfilesGuardiansGet

Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomUserProfilesGuardiansGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'animi';
    $request->guardianId = 'maiores';
    $request->key = 'itaque';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->studentId = 'corporis';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new ClassroomUserProfilesGuardiansGetSecurity();
    $requestSecurity->option1 = new ClassroomUserProfilesGuardiansGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userProfiles->classroomUserProfilesGuardiansGet($request, $requestSecurity);

    if ($response->guardian !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomUserProfilesGuardiansList

Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomUserProfilesGuardiansListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomUserProfilesGuardiansListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'repudiandae';
    $request->invitedEmailAddress = 'accusantium';
    $request->key = 'officia';
    $request->oauthToken = 'impedit';
    $request->pageSize = 97896;
    $request->pageToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->studentId = 'quisquam';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new ClassroomUserProfilesGuardiansListSecurity();
    $requestSecurity->option1 = new ClassroomUserProfilesGuardiansListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userProfiles->classroomUserProfilesGuardiansList($request, $requestSecurity);

    if ($response->listGuardiansResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
