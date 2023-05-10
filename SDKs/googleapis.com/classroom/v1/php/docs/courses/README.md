# courses

### Available Operations

* [classroomCoursesAliasesCreate](#classroomcoursesaliasescreate) - Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).
* [classroomCoursesAliasesDelete](#classroomcoursesaliasesdelete) - Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).
* [classroomCoursesAliasesList](#classroomcoursesaliaseslist) - Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.
* [classroomCoursesAnnouncementsCreate](#classroomcoursesannouncementscreate) - Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
* [classroomCoursesAnnouncementsDelete](#classroomcoursesannouncementsdelete) - Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
* [classroomCoursesAnnouncementsGet](#classroomcoursesannouncementsget) - Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.
* [classroomCoursesAnnouncementsList](#classroomcoursesannouncementslist) - Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [classroomCoursesAnnouncementsModifyAssignees](#classroomcoursesannouncementsmodifyassignees) - Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
* [classroomCoursesAnnouncementsPatch](#classroomcoursesannouncementspatch) - Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist
* [classroomCoursesCourseWorkCreate](#classroomcoursescourseworkcreate) - Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
* [classroomCoursesCourseWorkDelete](#classroomcoursescourseworkdelete) - Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
* [classroomCoursesCourseWorkGet](#classroomcoursescourseworkget) - Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
* [classroomCoursesCourseWorkList](#classroomcoursescourseworklist) - Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [classroomCoursesCourseWorkModifyAssignees](#classroomcoursescourseworkmodifyassignees) - Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
* [classroomCoursesCourseWorkPatch](#classroomcoursescourseworkpatch) - Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [classroomCoursesCourseWorkStudentSubmissionsGet](#classroomcoursescourseworkstudentsubmissionsget) - Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [classroomCoursesCourseWorkStudentSubmissionsList](#classroomcoursescourseworkstudentsubmissionslist) - Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [classroomCoursesCourseWorkStudentSubmissionsModifyAttachments](#classroomcoursescourseworkstudentsubmissionsmodifyattachments) - Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [classroomCoursesCourseWorkStudentSubmissionsPatch](#classroomcoursescourseworkstudentsubmissionspatch) - Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [classroomCoursesCourseWorkStudentSubmissionsReclaim](#classroomcoursescourseworkstudentsubmissionsreclaim) - Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [classroomCoursesCourseWorkStudentSubmissionsReturn](#classroomcoursescourseworkstudentsubmissionsreturn) - Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [classroomCoursesCourseWorkStudentSubmissionsTurnIn](#classroomcoursescourseworkstudentsubmissionsturnin) - Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [classroomCoursesCourseWorkMaterialsCreate](#classroomcoursescourseworkmaterialscreate) - Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
* [classroomCoursesCourseWorkMaterialsDelete](#classroomcoursescourseworkmaterialsdelete) - Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
* [classroomCoursesCourseWorkMaterialsGet](#classroomcoursescourseworkmaterialsget) - Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.
* [classroomCoursesCourseWorkMaterialsList](#classroomcoursescourseworkmaterialslist) - Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [classroomCoursesCourseWorkMaterialsPatch](#classroomcoursescourseworkmaterialspatch) - Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist
* [classroomCoursesCreate](#classroomcoursescreate) - Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserCannotOwnCourse * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.
* [classroomCoursesDelete](#classroomcoursesdelete) - Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
* [classroomCoursesGet](#classroomcoursesget) - Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
* [classroomCoursesList](#classroomcourseslist) - Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.
* [classroomCoursesPatch](#classroomcoursespatch) - Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner
* [classroomCoursesStudentsCreate](#classroomcoursesstudentscreate) - Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.
* [classroomCoursesStudentsDelete](#classroomcoursesstudentsdelete) - Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
* [classroomCoursesStudentsGet](#classroomcoursesstudentsget) - Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
* [classroomCoursesStudentsList](#classroomcoursesstudentslist) - Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
* [classroomCoursesTeachersCreate](#classroomcoursesteacherscreate) - Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.
* [classroomCoursesTeachersDelete](#classroomcoursesteachersdelete) - Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.
* [classroomCoursesTeachersGet](#classroomcoursesteachersget) - Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.
* [classroomCoursesTeachersList](#classroomcoursesteacherslist) - Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
* [classroomCoursesTopicsCreate](#classroomcoursestopicscreate) - Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [classroomCoursesTopicsDelete](#classroomcoursestopicsdelete) - Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.
* [classroomCoursesTopicsGet](#classroomcoursestopicsget) - Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.
* [classroomCoursesTopicsList](#classroomcoursestopicslist) - Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [classroomCoursesTopicsPatch](#classroomcoursestopicspatch) - Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist
* [classroomCoursesUpdate](#classroomcoursesupdate) - Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable

## classroomCoursesAliasesCreate

Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAliasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CourseAlias;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAliasesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesAliasesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->courseAlias = new CourseAlias();
    $request->courseAlias->alias = 'magnam';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->courseId = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new ClassroomCoursesAliasesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesAliasesCreate($request, $requestSecurity);

    if ($response->courseAlias !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesAliasesDelete

Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAliasesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAliasesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesAliasesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alias = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->courseId = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new ClassroomCoursesAliasesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesAliasesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesAliasesList

Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAliasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAliasesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAliasesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAliasesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesAliasesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->courseId = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->pageSize = 461479;
    $request->pageToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new ClassroomCoursesAliasesListSecurity();
    $requestSecurity->option1 = new ClassroomCoursesAliasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesAliasesList($request, $requestSecurity);

    if ($response->listCourseAliasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesAnnouncementsCreate

Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Announcement;
use \OpenAPI\OpenAPI\Models\Shared\AnnouncementAssigneeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualStudentsOptions;
use \OpenAPI\OpenAPI\Models\Shared\Material;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFile;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFileShareModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\AnnouncementStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesAnnouncementsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->announcement = new Announcement();
    $request->announcement->alternateLink = 'officia';
    $request->announcement->assigneeMode = AnnouncementAssigneeModeEnum::ALL_STUDENTS;
    $request->announcement->courseId = 'fugit';
    $request->announcement->creationTime = 'deleniti';
    $request->announcement->creatorUserId = 'hic';
    $request->announcement->id = 'c816742c-b739-4205-9293-96fea7596eb1';
    $request->announcement->individualStudentsOptions = new IndividualStudentsOptions();
    $request->announcement->individualStudentsOptions->studentIds = [
        'reiciendis',
    ];
    $request->announcement->materials = [
        new Material(),
        new Material(),
        new Material(),
    ];
    $request->announcement->scheduledTime = 'mollitia';
    $request->announcement->state = AnnouncementStateEnum::DRAFT;
    $request->announcement->text = 'dolores';
    $request->announcement->updateTime = 'dolorem';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->courseId = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new ClassroomCoursesAnnouncementsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesAnnouncementsCreate($request, $requestSecurity);

    if ($response->announcement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesAnnouncementsDelete

Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesAnnouncementsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->courseId = 'mollitia';
    $request->fields = 'dolorem';
    $request->id = 'a2fa9467-7392-451a-a52c-3f5ad019da1f';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new ClassroomCoursesAnnouncementsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesAnnouncementsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesAnnouncementsGet

Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesAnnouncementsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->courseId = 'perferendis';
    $request->fields = 'doloremque';
    $request->id = '74f15471-b5e6-4e13-b99d-488e1e91e450';
    $request->key = 'est';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new ClassroomCoursesAnnouncementsGetSecurity();
    $requestSecurity->option1 = new ClassroomCoursesAnnouncementsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesAnnouncementsGet($request, $requestSecurity);

    if ($response->announcement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesAnnouncementsList

Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsListAnnouncementStatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesAnnouncementsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->announcementStates = [
        ClassroomCoursesAnnouncementsListAnnouncementStatesEnum::PUBLISHED,
    ];
    $request->callback = 'cupiditate';
    $request->courseId = 'quos';
    $request->fields = 'perferendis';
    $request->key = 'magni';
    $request->oauthToken = 'assumenda';
    $request->orderBy = 'ipsam';
    $request->pageSize = 4695;
    $request->pageToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new ClassroomCoursesAnnouncementsListSecurity();
    $requestSecurity->option1 = new ClassroomCoursesAnnouncementsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesAnnouncementsList($request, $requestSecurity);

    if ($response->listAnnouncementsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesAnnouncementsModifyAssignees

Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsModifyAssigneesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyAnnouncementAssigneesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyAnnouncementAssigneesRequestAssigneeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyIndividualStudentsOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsModifyAssigneesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesAnnouncementsModifyAssigneesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->modifyAnnouncementAssigneesRequest = new ModifyAnnouncementAssigneesRequest();
    $request->modifyAnnouncementAssigneesRequest->assigneeMode = ModifyAnnouncementAssigneesRequestAssigneeModeEnum::INDIVIDUAL_STUDENTS;
    $request->modifyAnnouncementAssigneesRequest->modifyIndividualStudentsOptions = new ModifyIndividualStudentsOptions();
    $request->modifyAnnouncementAssigneesRequest->modifyIndividualStudentsOptions->addStudentIds = [
        'delectus',
        'eum',
    ];
    $request->modifyAnnouncementAssigneesRequest->modifyIndividualStudentsOptions->removeStudentIds = [
        'eligendi',
    ];
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->courseId = 'necessitatibus';
    $request->fields = 'sint';
    $request->id = 'a3efa77d-fb14-4cd6-aae3-95efb9ba88f3';
    $request->key = 'deserunt';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ClassroomCoursesAnnouncementsModifyAssigneesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesAnnouncementsModifyAssignees($request, $requestSecurity);

    if ($response->announcement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesAnnouncementsPatch

Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Announcement;
use \OpenAPI\OpenAPI\Models\Shared\AnnouncementAssigneeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualStudentsOptions;
use \OpenAPI\OpenAPI\Models\Shared\Material;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFile;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFileShareModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\AnnouncementStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesAnnouncementsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesAnnouncementsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->announcement = new Announcement();
    $request->announcement->alternateLink = 'perferendis';
    $request->announcement->assigneeMode = AnnouncementAssigneeModeEnum::ALL_STUDENTS;
    $request->announcement->courseId = 'magnam';
    $request->announcement->creationTime = 'distinctio';
    $request->announcement->creatorUserId = 'id';
    $request->announcement->id = '4469b6e2-1419-4598-90af-a563e2516fe4';
    $request->announcement->individualStudentsOptions = new IndividualStudentsOptions();
    $request->announcement->individualStudentsOptions->studentIds = [
        'deleniti',
        'facilis',
        'in',
        'architecto',
    ];
    $request->announcement->materials = [
        new Material(),
    ];
    $request->announcement->scheduledTime = 'repudiandae';
    $request->announcement->state = AnnouncementStateEnum::PUBLISHED;
    $request->announcement->text = 'expedita';
    $request->announcement->updateTime = 'nihil';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->courseId = 'saepe';
    $request->fields = 'pariatur';
    $request->id = '028921cd-dc69-4260-9fb5-76b0d5f0d30c';
    $request->key = 'corporis';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->updateMask = 'nobis';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new ClassroomCoursesAnnouncementsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesAnnouncementsPatch($request, $requestSecurity);

    if ($response->announcement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkCreate

Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CourseWork;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkAssigneeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Assignment;
use \OpenAPI\OpenAPI\Models\Shared\DriveFolder;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\GradeCategory;
use \OpenAPI\OpenAPI\Models\Shared\IndividualStudentsOptions;
use \OpenAPI\OpenAPI\Models\Shared\Material;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFile;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFileShareModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\MultipleChoiceQuestion;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkSubmissionModificationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkWorkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->courseWork = new CourseWork();
    $request->courseWork->alternateLink = 'dignissimos';
    $request->courseWork->assigneeMode = CourseWorkAssigneeModeEnum::ASSIGNEE_MODE_UNSPECIFIED;
    $request->courseWork->assignment = new Assignment();
    $request->courseWork->assignment->studentWorkFolder = new DriveFolder();
    $request->courseWork->assignment->studentWorkFolder->alternateLink = 'quis';
    $request->courseWork->assignment->studentWorkFolder->id = '3202c73d-5fe9-4b90-8289-09b3fe49a8d9';
    $request->courseWork->assignment->studentWorkFolder->title = 'Miss';
    $request->courseWork->associatedWithDeveloper = false;
    $request->courseWork->courseId = 'libero';
    $request->courseWork->creationTime = 'delectus';
    $request->courseWork->creatorUserId = 'quaerat';
    $request->courseWork->description = 'quos';
    $request->courseWork->dueDate = new Date();
    $request->courseWork->dueDate->day = 398221;
    $request->courseWork->dueDate->month = 212390;
    $request->courseWork->dueDate->year = 209843;
    $request->courseWork->dueTime = new TimeOfDay();
    $request->courseWork->dueTime->hours = 222443;
    $request->courseWork->dueTime->minutes = 186193;
    $request->courseWork->dueTime->nanos = 218749;
    $request->courseWork->dueTime->seconds = 944373;
    $request->courseWork->gradeCategory = new GradeCategory();
    $request->courseWork->gradeCategory->defaultGradeDenominator = 569574;
    $request->courseWork->gradeCategory->id = 'b77f3a41-0067-44eb-b692-80d1ba77a89e';
    $request->courseWork->gradeCategory->name = 'Emmett Kovacek';
    $request->courseWork->gradeCategory->weight = 663078;
    $request->courseWork->id = 'e4203ce5-e6a9-45d8-a0d4-46ce2af7a73c';
    $request->courseWork->individualStudentsOptions = new IndividualStudentsOptions();
    $request->courseWork->individualStudentsOptions->studentIds = [
        'amet',
        'tempore',
        'accusamus',
        'numquam',
    ];
    $request->courseWork->materials = [
        new Material(),
        new Material(),
    ];
    $request->courseWork->maxPoints = 2133.12;
    $request->courseWork->multipleChoiceQuestion = new MultipleChoiceQuestion();
    $request->courseWork->multipleChoiceQuestion->choices = [
        'totam',
        'nihil',
        'sit',
        'expedita',
    ];
    $request->courseWork->scheduledTime = 'neque';
    $request->courseWork->state = CourseWorkStateEnum::COURSE_WORK_STATE_UNSPECIFIED;
    $request->courseWork->submissionModificationMode = CourseWorkSubmissionModificationModeEnum::MODIFIABLE_UNTIL_TURNED_IN;
    $request->courseWork->title = 'Miss';
    $request->courseWork->topicId = 'voluptas';
    $request->courseWork->updateTime = 'deserunt';
    $request->courseWork->workType = CourseWorkWorkTypeEnum::ASSIGNMENT;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->courseId = 'cupiditate';
    $request->fields = 'maxime';
    $request->key = 'pariatur';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new ClassroomCoursesCourseWorkCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkCreate($request, $requestSecurity);

    if ($response->courseWork !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkDelete

Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->courseId = 'facilis';
    $request->fields = 'aliquid';
    $request->id = '79d23227-15bf-40cb-b1e3-1b8b90f3443a';
    $request->key = 'architecto';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'itaque';

    $requestSecurity = new ClassroomCoursesCourseWorkDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkGet

Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'porro';
    $request->courseId = 'doloribus';
    $request->fields = 'ut';
    $request->id = 'b921879f-ce95-43f7-bef7-fbc7abd74dd3';
    $request->key = 'natus';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'exercitationem';

    $requestSecurity = new ClassroomCoursesCourseWorkGetSecurity();
    $requestSecurity->option1 = new ClassroomCoursesCourseWorkGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkGet($request, $requestSecurity);

    if ($response->courseWork !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkList

Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkListCourseWorkStatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->courseId = 'doloribus';
    $request->courseWorkStates = [
        ClassroomCoursesCourseWorkListCourseWorkStatesEnum::DELETED,
        ClassroomCoursesCourseWorkListCourseWorkStatesEnum::PUBLISHED,
    ];
    $request->fields = 'alias';
    $request->key = 'officia';
    $request->oauthToken = 'tempora';
    $request->orderBy = 'ipsam';
    $request->pageSize = 410492;
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new ClassroomCoursesCourseWorkListSecurity();
    $requestSecurity->option1 = new ClassroomCoursesCourseWorkListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkList($request, $requestSecurity);

    if ($response->listCourseWorkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkModifyAssignees

Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkModifyAssigneesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyCourseWorkAssigneesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyCourseWorkAssigneesRequestAssigneeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyIndividualStudentsOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkModifyAssigneesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkModifyAssigneesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->modifyCourseWorkAssigneesRequest = new ModifyCourseWorkAssigneesRequest();
    $request->modifyCourseWorkAssigneesRequest->assigneeMode = ModifyCourseWorkAssigneesRequestAssigneeModeEnum::ALL_STUDENTS;
    $request->modifyCourseWorkAssigneesRequest->modifyIndividualStudentsOptions = new ModifyIndividualStudentsOptions();
    $request->modifyCourseWorkAssigneesRequest->modifyIndividualStudentsOptions->addStudentIds = [
        'dicta',
        'dolor',
        'maiores',
    ];
    $request->modifyCourseWorkAssigneesRequest->modifyIndividualStudentsOptions->removeStudentIds = [
        'ex',
    ];
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->courseId = 'nostrum';
    $request->fields = 'sapiente';
    $request->id = 'ce6c5561-46c3-4e25-8fb0-08c42e141aac';
    $request->key = 'velit';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new ClassroomCoursesCourseWorkModifyAssigneesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkModifyAssignees($request, $requestSecurity);

    if ($response->courseWork !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkPatch

Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CourseWork;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkAssigneeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Assignment;
use \OpenAPI\OpenAPI\Models\Shared\DriveFolder;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\GradeCategory;
use \OpenAPI\OpenAPI\Models\Shared\IndividualStudentsOptions;
use \OpenAPI\OpenAPI\Models\Shared\Material;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFile;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFileShareModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\MultipleChoiceQuestion;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkSubmissionModificationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkWorkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->courseWork = new CourseWork();
    $request->courseWork->alternateLink = 'nulla';
    $request->courseWork->assigneeMode = CourseWorkAssigneeModeEnum::ALL_STUDENTS;
    $request->courseWork->assignment = new Assignment();
    $request->courseWork->assignment->studentWorkFolder = new DriveFolder();
    $request->courseWork->assignment->studentWorkFolder->alternateLink = 'libero';
    $request->courseWork->assignment->studentWorkFolder->id = '14429074-7477-48a7-bd46-6d28c10ab3cd';
    $request->courseWork->assignment->studentWorkFolder->title = 'Miss';
    $request->courseWork->associatedWithDeveloper = false;
    $request->courseWork->courseId = 'fuga';
    $request->courseWork->creationTime = 'eius';
    $request->courseWork->creatorUserId = 'eos';
    $request->courseWork->description = 'voluptas';
    $request->courseWork->dueDate = new Date();
    $request->courseWork->dueDate->day = 69859;
    $request->courseWork->dueDate->month = 587600;
    $request->courseWork->dueDate->year = 9688;
    $request->courseWork->dueTime = new TimeOfDay();
    $request->courseWork->dueTime->hours = 272822;
    $request->courseWork->dueTime->minutes = 892050;
    $request->courseWork->dueTime->nanos = 370853;
    $request->courseWork->dueTime->seconds = 133465;
    $request->courseWork->gradeCategory = new GradeCategory();
    $request->courseWork->gradeCategory->defaultGradeDenominator = 197054;
    $request->courseWork->gradeCategory->id = 'c7e0bc71-78e4-4796-b2a7-0c688282aa48';
    $request->courseWork->gradeCategory->name = 'Cathy Huel';
    $request->courseWork->gradeCategory->weight = 159870;
    $request->courseWork->id = '22e9817e-e17c-4be6-9e6b-7b95bc0ab3c2';
    $request->courseWork->individualStudentsOptions = new IndividualStudentsOptions();
    $request->courseWork->individualStudentsOptions->studentIds = [
        'minus',
    ];
    $request->courseWork->materials = [
        new Material(),
        new Material(),
    ];
    $request->courseWork->maxPoints = 9591.67;
    $request->courseWork->multipleChoiceQuestion = new MultipleChoiceQuestion();
    $request->courseWork->multipleChoiceQuestion->choices = [
        'esse',
    ];
    $request->courseWork->scheduledTime = 'blanditiis';
    $request->courseWork->state = CourseWorkStateEnum::DRAFT;
    $request->courseWork->submissionModificationMode = CourseWorkSubmissionModificationModeEnum::MODIFIABLE;
    $request->courseWork->title = 'Dr.';
    $request->courseWork->topicId = 'quas';
    $request->courseWork->updateTime = 'esse';
    $request->courseWork->workType = CourseWorkWorkTypeEnum::COURSE_WORK_TYPE_UNSPECIFIED;
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->courseId = 'pariatur';
    $request->fields = 'possimus';
    $request->id = '2efd121a-a6f1-4e67-8bdb-04f15756082d';
    $request->key = 'ex';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->updateMask = 'dolorum';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ClassroomCoursesCourseWorkPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkPatch($request, $requestSecurity);

    if ($response->courseWork !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkStudentSubmissionsGet

Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkStudentSubmissionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->courseId = 'voluptate';
    $request->courseWorkId = 'ipsa';
    $request->fields = 'minima';
    $request->id = '1339d080-86a1-4840-b94c-26071f93f5f0';
    $request->key = 'ea';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity();
    $requestSecurity->option1 = new ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkStudentSubmissionsGet($request, $requestSecurity);

    if ($response->studentSubmission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkStudentSubmissionsList

Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkStudentSubmissionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->courseId = 'nemo';
    $request->courseWorkId = 'quae';
    $request->fields = 'quaerat';
    $request->key = 'porro';
    $request->late = ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum::NOT_LATE_ONLY;
    $request->oauthToken = 'labore';
    $request->pageSize = 70447;
    $request->pageToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->states = [
        ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum::CREATED,
        ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum::NEW,
        ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum::TURNED_IN,
    ];
    $request->uploadType = 'est';
    $request->uploadProtocol = 'recusandae';
    $request->userId = 'totam';

    $requestSecurity = new ClassroomCoursesCourseWorkStudentSubmissionsListSecurity();
    $requestSecurity->option1 = new ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkStudentSubmissionsList($request, $requestSecurity);

    if ($response->listStudentSubmissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkStudentSubmissionsModifyAttachments

Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Attachment;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->modifyAttachmentsRequest = new ModifyAttachmentsRequest();
    $request->modifyAttachmentsRequest->addAttachments = [
        new Attachment(),
        new Attachment(),
    ];
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->courseId = 'labore';
    $request->courseWorkId = 'possimus';
    $request->fields = 'facilis';
    $request->id = 'b675fd5e-60b3-475e-94f6-fbee41f33317';
    $request->key = 'a';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity();
    $requestSecurity->option1 = new ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkStudentSubmissionsModifyAttachments($request, $requestSecurity);

    if ($response->studentSubmission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkStudentSubmissionsPatch

Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StudentSubmission;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentSubmission;
use \OpenAPI\OpenAPI\Models\Shared\Attachment;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\StudentSubmissionCourseWorkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MultipleChoiceSubmission;
use \OpenAPI\OpenAPI\Models\Shared\ShortAnswerSubmission;
use \OpenAPI\OpenAPI\Models\Shared\StudentSubmissionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubmissionHistory;
use \OpenAPI\OpenAPI\Models\Shared\GradeHistory;
use \OpenAPI\OpenAPI\Models\Shared\GradeHistoryGradeChangeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StateHistory;
use \OpenAPI\OpenAPI\Models\Shared\StateHistoryStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->studentSubmission = new StudentSubmission();
    $request->studentSubmission->alternateLink = 'ipsa';
    $request->studentSubmission->assignedGrade = 9167.27;
    $request->studentSubmission->assignmentSubmission = new AssignmentSubmission();
    $request->studentSubmission->assignmentSubmission->attachments = [
        new Attachment(),
        new Attachment(),
        new Attachment(),
    ];
    $request->studentSubmission->associatedWithDeveloper = false;
    $request->studentSubmission->courseId = 'vitae';
    $request->studentSubmission->courseWorkId = 'accusamus';
    $request->studentSubmission->courseWorkType = StudentSubmissionCourseWorkTypeEnum::SHORT_ANSWER_QUESTION;
    $request->studentSubmission->creationTime = 'tempora';
    $request->studentSubmission->draftGrade = 1328.15;
    $request->studentSubmission->id = '6555ba3c-2874-44ed-93b8-8f3a8d8f5c0b';
    $request->studentSubmission->late = false;
    $request->studentSubmission->multipleChoiceSubmission = new MultipleChoiceSubmission();
    $request->studentSubmission->multipleChoiceSubmission->answer = 'sed';
    $request->studentSubmission->shortAnswerSubmission = new ShortAnswerSubmission();
    $request->studentSubmission->shortAnswerSubmission->answer = 'reiciendis';
    $request->studentSubmission->state = StudentSubmissionStateEnum::SUBMISSION_STATE_UNSPECIFIED;
    $request->studentSubmission->submissionHistory = [
        new SubmissionHistory(),
        new SubmissionHistory(),
        new SubmissionHistory(),
        new SubmissionHistory(),
    ];
    $request->studentSubmission->updateTime = 'facilis';
    $request->studentSubmission->userId = 'voluptate';
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->courseId = 'dolore';
    $request->courseWorkId = 'laborum';
    $request->fields = 'sed';
    $request->id = '76b26916-fe1f-408f-8294-e3698f447f60';
    $request->key = 'non';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->updateMask = 'facilis';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity();
    $requestSecurity->option1 = new ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkStudentSubmissionsPatch($request, $requestSecurity);

    if ($response->studentSubmission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkStudentSubmissionsReclaim

Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'rem' => 'sit',
        'nobis' => 'error',
        'veniam' => 'minima',
        'recusandae' => 'reiciendis',
    ];
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->courseId = 'saepe';
    $request->courseWorkId = 'numquam';
    $request->fields = 'veniam';
    $request->id = '7e1858b6-a89f-4be3-a5aa-8e4824d0ab40';
    $request->key = 'esse';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkStudentSubmissionsReclaim($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkStudentSubmissionsReturn

Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'et' => 'blanditiis',
        'ex' => 'sed',
    ];
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->courseId = 'saepe';
    $request->courseWorkId = 'error';
    $request->fields = 'consequatur';
    $request->id = '4f3b1194-b8ab-4f60-ba79-f9dfe0ab7da8';
    $request->key = 'mollitia';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkStudentSubmissionsReturn($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkStudentSubmissionsTurnIn

Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsTurnInRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkStudentSubmissionsTurnInSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkStudentSubmissionsTurnInRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'reprehenderit' => 'asperiores',
        'totam' => 'suscipit',
        'quidem' => 'maxime',
    ];
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->courseId = 'assumenda';
    $request->courseWorkId = 'ea';
    $request->fields = 'atque';
    $request->id = '9eee9526-f8d9-486e-881e-ad4f0e101256';
    $request->key = 'velit';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new ClassroomCoursesCourseWorkStudentSubmissionsTurnInSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkStudentSubmissionsTurnIn($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkMaterialsCreate

Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkMaterial;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkMaterialAssigneeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualStudentsOptions;
use \OpenAPI\OpenAPI\Models\Shared\Material;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFile;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFileShareModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkMaterialStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkMaterialsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->courseWorkMaterial = new CourseWorkMaterial();
    $request->courseWorkMaterial->alternateLink = 'occaecati';
    $request->courseWorkMaterial->assigneeMode = CourseWorkMaterialAssigneeModeEnum::INDIVIDUAL_STUDENTS;
    $request->courseWorkMaterial->courseId = 'perspiciatis';
    $request->courseWorkMaterial->creationTime = 'in';
    $request->courseWorkMaterial->creatorUserId = 'adipisci';
    $request->courseWorkMaterial->description = 'eveniet';
    $request->courseWorkMaterial->id = '922a57a1-5be3-4e06-8807-e2b6e3ab8845';
    $request->courseWorkMaterial->individualStudentsOptions = new IndividualStudentsOptions();
    $request->courseWorkMaterial->individualStudentsOptions->studentIds = [
        'alias',
        'corporis',
        'perspiciatis',
        'nihil',
    ];
    $request->courseWorkMaterial->materials = [
        new Material(),
        new Material(),
        new Material(),
    ];
    $request->courseWorkMaterial->scheduledTime = 'voluptas';
    $request->courseWorkMaterial->state = CourseWorkMaterialStateEnum::COURSEWORK_MATERIAL_STATE_UNSPECIFIED;
    $request->courseWorkMaterial->title = 'Dr.';
    $request->courseWorkMaterial->topicId = 'reiciendis';
    $request->courseWorkMaterial->updateTime = 'dolores';
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolore';
    $request->courseId = 'dolorum';
    $request->fields = 'nesciunt';
    $request->key = 'quae';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new ClassroomCoursesCourseWorkMaterialsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkMaterialsCreate($request, $requestSecurity);

    if ($response->courseWorkMaterial !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkMaterialsDelete

Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkMaterialsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'adipisci';
    $request->courseId = 'debitis';
    $request->fields = 'laudantium';
    $request->id = '65e7956f-9251-4a5a-9da6-60ff57bfaad4';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new ClassroomCoursesCourseWorkMaterialsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkMaterialsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkMaterialsGet

Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkMaterialsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->courseId = 'inventore';
    $request->fields = 'fugit';
    $request->id = 'c1032648-dc2f-4615-999e-bfd0e9fe6c63';
    $request->key = 'fugit';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'animi';

    $requestSecurity = new ClassroomCoursesCourseWorkMaterialsGetSecurity();
    $requestSecurity->option1 = new ClassroomCoursesCourseWorkMaterialsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkMaterialsGet($request, $requestSecurity);

    if ($response->courseWorkMaterial !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkMaterialsList

Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkMaterialsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->courseId = 'et';
    $request->courseWorkMaterialStates = [
        ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum::DRAFT,
        ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum::DRAFT,
    ];
    $request->fields = 'suscipit';
    $request->key = 'adipisci';
    $request->materialDriveId = 'quasi';
    $request->materialLink = 'magni';
    $request->oauthToken = 'doloribus';
    $request->orderBy = 'nulla';
    $request->pageSize = 896582;
    $request->pageToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new ClassroomCoursesCourseWorkMaterialsListSecurity();
    $requestSecurity->option1 = new ClassroomCoursesCourseWorkMaterialsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkMaterialsList($request, $requestSecurity);

    if ($response->listCourseWorkMaterialResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCourseWorkMaterialsPatch

Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkMaterial;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkMaterialAssigneeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualStudentsOptions;
use \OpenAPI\OpenAPI\Models\Shared\Material;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFile;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveFileShareModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\CourseWorkMaterialStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCourseWorkMaterialsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCourseWorkMaterialsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->courseWorkMaterial = new CourseWorkMaterial();
    $request->courseWorkMaterial->alternateLink = 'iusto';
    $request->courseWorkMaterial->assigneeMode = CourseWorkMaterialAssigneeModeEnum::ALL_STUDENTS;
    $request->courseWorkMaterial->courseId = 'praesentium';
    $request->courseWorkMaterial->creationTime = 'maiores';
    $request->courseWorkMaterial->creatorUserId = 'reiciendis';
    $request->courseWorkMaterial->description = 'vel';
    $request->courseWorkMaterial->id = '1d017476-360a-415d-b6a6-60659a1adeaa';
    $request->courseWorkMaterial->individualStudentsOptions = new IndividualStudentsOptions();
    $request->courseWorkMaterial->individualStudentsOptions->studentIds = [
        'ad',
        'deleniti',
        'enim',
    ];
    $request->courseWorkMaterial->materials = [
        new Material(),
    ];
    $request->courseWorkMaterial->scheduledTime = 'repellendus';
    $request->courseWorkMaterial->state = CourseWorkMaterialStateEnum::PUBLISHED;
    $request->courseWorkMaterial->title = 'Miss';
    $request->courseWorkMaterial->topicId = 'ex';
    $request->courseWorkMaterial->updateTime = 'ut';
    $request->accessToken = 'ad';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->courseId = 'molestias';
    $request->fields = 'cum';
    $request->id = '61891baa-0fe1-4ade-808e-6f8c5f350d8c';
    $request->key = 'quibusdam';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->updateMask = 'culpa';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new ClassroomCoursesCourseWorkMaterialsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCourseWorkMaterialsPatch($request, $requestSecurity);

    if ($response->courseWorkMaterial !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesCreate

Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserCannotOwnCourse * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Course;
use \OpenAPI\OpenAPI\Models\Shared\CourseMaterialSet;
use \OpenAPI\OpenAPI\Models\Shared\CourseMaterial;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\CourseCourseStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GradebookSettings;
use \OpenAPI\OpenAPI\Models\Shared\GradebookSettingsCalculationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GradebookSettingsDisplaySettingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GradeCategory;
use \OpenAPI\OpenAPI\Models\Shared\DriveFolder;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->course = new Course();
    $request->course->alternateLink = 'deleniti';
    $request->course->calendarId = 'veritatis';
    $request->course->courseGroupEmail = 'tempora';
    $request->course->courseMaterialSets = [
        new CourseMaterialSet(),
    ];
    $request->course->courseState = CourseCourseStateEnum::COURSE_STATE_UNSPECIFIED;
    $request->course->creationTime = 'architecto';
    $request->course->description = 'sit';
    $request->course->descriptionHeading = 'modi';
    $request->course->enrollmentCode = 'fugit';
    $request->course->gradebookSettings = new GradebookSettings();
    $request->course->gradebookSettings->calculationType = GradebookSettingsCalculationTypeEnum::CALCULATION_TYPE_UNSPECIFIED;
    $request->course->gradebookSettings->displaySetting = GradebookSettingsDisplaySettingEnum::HIDE_OVERALL_GRADE;
    $request->course->gradebookSettings->gradeCategories = [
        new GradeCategory(),
    ];
    $request->course->guardiansEnabled = false;
    $request->course->id = '3d5208ec-e7e2-453b-a684-51c6c6e205e1';
    $request->course->name = 'Teri Thiel';
    $request->course->ownerId = 'sequi';
    $request->course->room = 'doloribus';
    $request->course->section = 'repudiandae';
    $request->course->teacherFolder = new DriveFolder();
    $request->course->teacherFolder->alternateLink = 'optio';
    $request->course->teacherFolder->id = '9578a645-8427-43a8-818d-162309fb0929';
    $request->course->teacherFolder->title = 'Miss';
    $request->course->teacherGroupEmail = 'magni';
    $request->course->updateTime = 'inventore';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'distinctio';
    $request->key = 'omnis';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new ClassroomCoursesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesCreate($request, $requestSecurity);

    if ($response->course !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesDelete

Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'commodi';
    $request->fields = 'itaque';
    $request->id = '68e4be05-6013-4f59-9a75-7a59ecfef66e';
    $request->key = 'delectus';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new ClassroomCoursesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesGet

Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'impedit';
    $request->id = '2beb4773-73c8-4d72-b64d-1db1f2c43106';
    $request->key = 'ea';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new ClassroomCoursesGetSecurity();
    $requestSecurity->option1 = new ClassroomCoursesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesGet($request, $requestSecurity);

    if ($response->course !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesList

Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesListCourseStatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'earum';
    $request->courseStates = [
        ClassroomCoursesListCourseStatesEnum::DECLINED,
    ];
    $request->fields = 'voluptatibus';
    $request->key = 'iste';
    $request->oauthToken = 'itaque';
    $request->pageSize = 2677;
    $request->pageToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->studentId = 'velit';
    $request->teacherId = 'laborum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new ClassroomCoursesListSecurity();
    $requestSecurity->option1 = new ClassroomCoursesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesList($request, $requestSecurity);

    if ($response->listCoursesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesPatch

Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Course;
use \OpenAPI\OpenAPI\Models\Shared\CourseMaterialSet;
use \OpenAPI\OpenAPI\Models\Shared\CourseMaterial;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\CourseCourseStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GradebookSettings;
use \OpenAPI\OpenAPI\Models\Shared\GradebookSettingsCalculationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GradebookSettingsDisplaySettingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GradeCategory;
use \OpenAPI\OpenAPI\Models\Shared\DriveFolder;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->course = new Course();
    $request->course->alternateLink = 'sit';
    $request->course->calendarId = 'doloremque';
    $request->course->courseGroupEmail = 'consequatur';
    $request->course->courseMaterialSets = [
        new CourseMaterialSet(),
        new CourseMaterialSet(),
        new CourseMaterialSet(),
    ];
    $request->course->courseState = CourseCourseStateEnum::SUSPENDED;
    $request->course->creationTime = 'ea';
    $request->course->description = 'quidem';
    $request->course->descriptionHeading = 'voluptas';
    $request->course->enrollmentCode = 'facilis';
    $request->course->gradebookSettings = new GradebookSettings();
    $request->course->gradebookSettings->calculationType = GradebookSettingsCalculationTypeEnum::WEIGHTED_CATEGORIES;
    $request->course->gradebookSettings->displaySetting = GradebookSettingsDisplaySettingEnum::HIDE_OVERALL_GRADE;
    $request->course->gradebookSettings->gradeCategories = [
        new GradeCategory(),
        new GradeCategory(),
        new GradeCategory(),
    ];
    $request->course->guardiansEnabled = false;
    $request->course->id = '8f759eac-55a9-4741-9311-352965bb8a72';
    $request->course->name = 'Mr. Anne Kautzer';
    $request->course->ownerId = 'neque';
    $request->course->room = 'exercitationem';
    $request->course->section = 'itaque';
    $request->course->teacherFolder = new DriveFolder();
    $request->course->teacherFolder->alternateLink = 'et';
    $request->course->teacherFolder->id = '39dbc225-9b1a-4bda-8c07-0e1084cb0672';
    $request->course->teacherFolder->title = 'Dr.';
    $request->course->teacherGroupEmail = 'beatae';
    $request->course->updateTime = 'est';
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'provident';
    $request->id = 'eeb9665b-85ef-4bd0-abae-0be2d782259e';
    $request->key = 'adipisci';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->updateMask = 'ut';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new ClassroomCoursesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesPatch($request, $requestSecurity);

    if ($response->course !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesStudentsCreate

Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Student;
use \OpenAPI\OpenAPI\Models\Shared\UserProfile;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Shared\GlobalPermission;
use \OpenAPI\OpenAPI\Models\Shared\GlobalPermissionPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DriveFolder;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesStudentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->student = new Student();
    $request->student->courseId = 'unde';
    $request->student->profile = new UserProfile();
    $request->student->profile->emailAddress = 'molestiae';
    $request->student->profile->id = 'f92443da-7ce5-42b8-95c5-37c6454efb0b';
    $request->student->profile->name = new Name();
    $request->student->profile->name->familyName = 'ratione';
    $request->student->profile->name->fullName = 'labore';
    $request->student->profile->name->givenName = 'totam';
    $request->student->profile->permissions = [
        new GlobalPermission(),
        new GlobalPermission(),
        new GlobalPermission(),
    ];
    $request->student->profile->photoUrl = 'voluptas';
    $request->student->profile->verifiedTeacher = false;
    $request->student->studentWorkFolder = new DriveFolder();
    $request->student->studentWorkFolder->alternateLink = 'quo';
    $request->student->studentWorkFolder->id = '3ca5acfb-e2fd-4570-b577-929177deac64';
    $request->student->studentWorkFolder->title = 'Ms.';
    $request->student->userId = 'officiis';
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'exercitationem';
    $request->courseId = 'quam';
    $request->enrollmentCode = 'dolorem';
    $request->fields = 'modi';
    $request->key = 'ipsa';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new ClassroomCoursesStudentsCreateSecurity();
    $requestSecurity->option1 = new ClassroomCoursesStudentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesStudentsCreate($request, $requestSecurity);

    if ($response->student !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesStudentsDelete

Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesStudentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->courseId = 'animi';
    $request->fields = 'dolores';
    $request->key = 'nam';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'nobis';
    $request->userId = 'ipsa';

    $requestSecurity = new ClassroomCoursesStudentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesStudentsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesStudentsGet

Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesStudentsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->courseId = 'laboriosam';
    $request->fields = 'pariatur';
    $request->key = 'libero';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'aliquam';
    $request->userId = 'nostrum';

    $requestSecurity = new ClassroomCoursesStudentsGetSecurity();
    $requestSecurity->option1 = new ClassroomCoursesStudentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesStudentsGet($request, $requestSecurity);

    if ($response->student !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesStudentsList

Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesStudentsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesStudentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->courseId = 'hic';
    $request->fields = 'animi';
    $request->key = 'quas';
    $request->oauthToken = 'totam';
    $request->pageSize = 564667;
    $request->pageToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new ClassroomCoursesStudentsListSecurity();
    $requestSecurity->option1 = new ClassroomCoursesStudentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesStudentsList($request, $requestSecurity);

    if ($response->listStudentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesTeachersCreate

Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Teacher;
use \OpenAPI\OpenAPI\Models\Shared\UserProfile;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Shared\GlobalPermission;
use \OpenAPI\OpenAPI\Models\Shared\GlobalPermissionPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesTeachersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->teacher = new Teacher();
    $request->teacher->courseId = 'iste';
    $request->teacher->profile = new UserProfile();
    $request->teacher->profile->emailAddress = 'assumenda';
    $request->teacher->profile->id = 'bb30fcb3-3ea0-455b-997c-d44e2f52d82d';
    $request->teacher->profile->name = new Name();
    $request->teacher->profile->name->familyName = 'amet';
    $request->teacher->profile->name->fullName = 'exercitationem';
    $request->teacher->profile->name->givenName = 'ab';
    $request->teacher->profile->permissions = [
        new GlobalPermission(),
    ];
    $request->teacher->profile->photoUrl = 'facilis';
    $request->teacher->profile->verifiedTeacher = false;
    $request->teacher->userId = 'tempore';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->courseId = 'blanditiis';
    $request->fields = 'distinctio';
    $request->key = 'nisi';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new ClassroomCoursesTeachersCreateSecurity();
    $requestSecurity->option1 = new ClassroomCoursesTeachersCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesTeachersCreate($request, $requestSecurity);

    if ($response->teacher !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesTeachersDelete

Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesTeachersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->courseId = 'voluptatibus';
    $request->fields = 'voluptatibus';
    $request->key = 'consequuntur';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'eos';
    $request->userId = 'reprehenderit';

    $requestSecurity = new ClassroomCoursesTeachersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesTeachersDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesTeachersGet

Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesTeachersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->courseId = 'rem';
    $request->fields = 'eligendi';
    $request->key = 'fugiat';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'dolor';
    $request->userId = 'dicta';

    $requestSecurity = new ClassroomCoursesTeachersGetSecurity();
    $requestSecurity->option1 = new ClassroomCoursesTeachersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesTeachersGet($request, $requestSecurity);

    if ($response->teacher !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesTeachersList

Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTeachersListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesTeachersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dignissimos';
    $request->courseId = 'esse';
    $request->fields = 'fugiat';
    $request->key = 'ad';
    $request->oauthToken = 'aspernatur';
    $request->pageSize = 316501;
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new ClassroomCoursesTeachersListSecurity();
    $requestSecurity->option1 = new ClassroomCoursesTeachersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesTeachersList($request, $requestSecurity);

    if ($response->listTeachersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesTopicsCreate

Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Topic;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesTopicsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->topic = new Topic();
    $request->topic->courseId = 'ab';
    $request->topic->name = 'Meghan Turcotte';
    $request->topic->topicId = 'eos';
    $request->topic->updateTime = 'reiciendis';
    $request->accessToken = 'earum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->courseId = 'nemo';
    $request->fields = 'repellat';
    $request->key = 'quisquam';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'illo';

    $requestSecurity = new ClassroomCoursesTopicsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesTopicsCreate($request, $requestSecurity);

    if ($response->topic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesTopicsDelete

Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesTopicsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->courseId = 'provident';
    $request->fields = 'laudantium';
    $request->id = 'e0c2bb89-eb75-4dad-a36c-600503d8bb31';
    $request->key = 'dicta';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new ClassroomCoursesTopicsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesTopicsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesTopicsGet

Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesTopicsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->courseId = 'provident';
    $request->fields = 'repudiandae';
    $request->id = '057eb809-e281-4033-9f39-81d4c700b607';
    $request->key = 'repellat';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new ClassroomCoursesTopicsGetSecurity();
    $requestSecurity->option1 = new ClassroomCoursesTopicsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesTopicsGet($request, $requestSecurity);

    if ($response->topic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesTopicsList

Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesTopicsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->courseId = 'natus';
    $request->fields = 'temporibus';
    $request->key = 'officia';
    $request->oauthToken = 'amet';
    $request->pageSize = 948541;
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new ClassroomCoursesTopicsListSecurity();
    $requestSecurity->option1 = new ClassroomCoursesTopicsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesTopicsList($request, $requestSecurity);

    if ($response->listTopicResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesTopicsPatch

Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Topic;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesTopicsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesTopicsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->topic = new Topic();
    $request->topic->courseId = 'dignissimos';
    $request->topic->name = 'Clarence Feeney Sr.';
    $request->topic->topicId = 'exercitationem';
    $request->topic->updateTime = 'nihil';
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->courseId = 'hic';
    $request->fields = 'deserunt';
    $request->id = 'f4b7544e-472e-4802-857a-5b40463a7d57';
    $request->key = 'veniam';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->updateMask = 'modi';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new ClassroomCoursesTopicsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesTopicsPatch($request, $requestSecurity);

    if ($response->topic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classroomCoursesUpdate

Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Course;
use \OpenAPI\OpenAPI\Models\Shared\CourseMaterialSet;
use \OpenAPI\OpenAPI\Models\Shared\CourseMaterial;
use \OpenAPI\OpenAPI\Models\Shared\DriveFile;
use \OpenAPI\OpenAPI\Models\Shared\Form;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\YouTubeVideo;
use \OpenAPI\OpenAPI\Models\Shared\CourseCourseStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GradebookSettings;
use \OpenAPI\OpenAPI\Models\Shared\GradebookSettingsCalculationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GradebookSettingsDisplaySettingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GradeCategory;
use \OpenAPI\OpenAPI\Models\Shared\DriveFolder;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassroomCoursesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassroomCoursesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->course = new Course();
    $request->course->alternateLink = 'odio';
    $request->course->calendarId = 'commodi';
    $request->course->courseGroupEmail = 'numquam';
    $request->course->courseMaterialSets = [
        new CourseMaterialSet(),
        new CourseMaterialSet(),
        new CourseMaterialSet(),
    ];
    $request->course->courseState = CourseCourseStateEnum::DECLINED;
    $request->course->creationTime = 'voluptate';
    $request->course->description = 'consectetur';
    $request->course->descriptionHeading = 'nesciunt';
    $request->course->enrollmentCode = 'quaerat';
    $request->course->gradebookSettings = new GradebookSettings();
    $request->course->gradebookSettings->calculationType = GradebookSettingsCalculationTypeEnum::WEIGHTED_CATEGORIES;
    $request->course->gradebookSettings->displaySetting = GradebookSettingsDisplaySettingEnum::SHOW_TEACHERS_ONLY;
    $request->course->gradebookSettings->gradeCategories = [
        new GradeCategory(),
    ];
    $request->course->guardiansEnabled = false;
    $request->course->id = 'b781b36a-0808-48d1-80ef-ada200ef0422';
    $request->course->name = 'Mrs. Kerry Cassin';
    $request->course->ownerId = 'optio';
    $request->course->room = 'voluptatibus';
    $request->course->section = 'molestias';
    $request->course->teacherFolder = new DriveFolder();
    $request->course->teacherFolder->alternateLink = 'officia';
    $request->course->teacherFolder->id = 'b8366c72-3ffd-4a9e-86be-e4825c1fc0e1';
    $request->course->teacherFolder->title = 'Mr.';
    $request->course->teacherGroupEmail = 'enim';
    $request->course->updateTime = 'optio';
    $request->accessToken = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'reiciendis';
    $request->id = 'f918544e-c42d-4efc-8e8f-1977773e6356';
    $request->key = 'consequuntur';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new ClassroomCoursesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->courses->classroomCoursesUpdate($request, $requestSecurity);

    if ($response->course !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
