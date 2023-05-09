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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreateResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CourseAlias;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAliasesCreateRequest req = new ClassroomCoursesAliasesCreateRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                courseAlias = new CourseAlias() {{
                    alias = "delectus";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            ClassroomCoursesAliasesCreateResponse res = sdk.courses.classroomCoursesAliasesCreate(req, new ClassroomCoursesAliasesCreateSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.courseAlias != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesAliasesDelete

Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAliasesDeleteRequest req = new ClassroomCoursesAliasesDeleteRequest("ab", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            ClassroomCoursesAliasesDeleteResponse res = sdk.courses.classroomCoursesAliasesDelete(req, new ClassroomCoursesAliasesDeleteSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesAliasesList

Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesListRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesListResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesListSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAliasesListRequest req = new ClassroomCoursesAliasesListRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                pageSize = 639921L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "deleniti";
                uploadProtocol = "hic";
            }};            

            ClassroomCoursesAliasesListResponse res = sdk.courses.classroomCoursesAliasesList(req, new ClassroomCoursesAliasesListSecurity() {{
                option1 = new ClassroomCoursesAliasesListSecurityOption1("optio", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listCourseAliasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesAnnouncementsCreate

Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsCreateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsCreateResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Announcement;
import org.openapis.openapi.models.shared.AnnouncementAssigneeModeEnum;
import org.openapis.openapi.models.shared.AnnouncementStateEnum;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.IndividualStudentsOptions;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.Material;
import org.openapis.openapi.models.shared.SharedDriveFile;
import org.openapis.openapi.models.shared.SharedDriveFileShareModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAnnouncementsCreateRequest req = new ClassroomCoursesAnnouncementsCreateRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                announcement = new Announcement() {{
                    alternateLink = "molestiae";
                    assigneeMode = AnnouncementAssigneeModeEnum.ASSIGNEE_MODE_UNSPECIFIED;
                    courseId = "qui";
                    creationTime = "impedit";
                    creatorUserId = "cum";
                    id = "73920592-9396-4fea-b596-eb10faaa2352";
                    individualStudentsOptions = new IndividualStudentsOptions() {{
                        studentIds = new String[]{{
                            add("enim"),
                            add("omnis"),
                            add("nemo"),
                            add("minima"),
                        }};
                    }};;
                    materials = new org.openapis.openapi.models.shared.Material[]{{
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "accusantium";
                                    id = "7aff1a3a-2fa9-4467-b392-51aa52c3f5ad";
                                    thumbnailUrl = "aut";
                                    title = "Mr.";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.EDIT;
                            }};
                            form = new Form() {{
                                formUrl = "temporibus";
                                responseUrl = "laborum";
                                thumbnailUrl = "quasi";
                                title = "Dr.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "voluptatibus";
                                title = "Dr.";
                                url = "nihil";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "praesentium";
                                id = "f097b007-4f15-4471-b5e6-e13b99d488e1";
                                thumbnailUrl = "repudiandae";
                                title = "Ms.";
                            }};
                        }}),
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "veritatis";
                                    id = "e450ad2a-bd44-4269-802d-502a94bb4f63";
                                    thumbnailUrl = "eligendi";
                                    title = "Ms.";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.VIEW;
                            }};
                            form = new Form() {{
                                formUrl = "provident";
                                responseUrl = "necessitatibus";
                                thumbnailUrl = "sint";
                                title = "Miss";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "dolor";
                                title = "Dr.";
                                url = "a";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "dolorum";
                                id = "77dfb14c-d66a-4e39-9efb-9ba88f3a6699";
                                thumbnailUrl = "molestiae";
                                title = "Mr.";
                            }};
                        }}),
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "nihil";
                                    id = "4ba4469b-6e21-4419-9989-0afa563e2516";
                                    thumbnailUrl = "doloribus";
                                    title = "Dr.";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.VIEW;
                            }};
                            form = new Form() {{
                                formUrl = "maxime";
                                responseUrl = "deleniti";
                                thumbnailUrl = "facilis";
                                title = "Ms.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "architecto";
                                title = "Mr.";
                                url = "repudiandae";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "ullam";
                                id = "b7fd2ed0-2892-41cd-9c69-2601fb576b0d";
                                thumbnailUrl = "nemo";
                                title = "Dr.";
                            }};
                        }}),
                    }};
                    scheduledTime = "perferendis";
                    state = AnnouncementStateEnum.DELETED;
                    text = "amet";
                    updateTime = "aut";
                }};;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "libero";
                key = "nobis";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "totam";
                uploadProtocol = "dignissimos";
            }};            

            ClassroomCoursesAnnouncementsCreateResponse res = sdk.courses.classroomCoursesAnnouncementsCreate(req, new ClassroomCoursesAnnouncementsCreateSecurity("eaque", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.announcement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesAnnouncementsDelete

Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAnnouncementsDeleteRequest req = new ClassroomCoursesAnnouncementsDeleteRequest("nesciunt", "eos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "dolor";
                key = "vero";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "recusandae";
                uploadProtocol = "omnis";
            }};            

            ClassroomCoursesAnnouncementsDeleteResponse res = sdk.courses.classroomCoursesAnnouncementsDelete(req, new ClassroomCoursesAnnouncementsDeleteSecurity("facilis", "perspiciatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesAnnouncementsGet

Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsGetRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsGetResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsGetSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAnnouncementsGetRequest req = new ClassroomCoursesAnnouncementsGetRequest("voluptatem", "porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "occaecati";
                key = "rerum";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "earum";
                uploadProtocol = "modi";
            }};            

            ClassroomCoursesAnnouncementsGetResponse res = sdk.courses.classroomCoursesAnnouncementsGet(req, new ClassroomCoursesAnnouncementsGetSecurity() {{
                option1 = new ClassroomCoursesAnnouncementsGetSecurityOption1("iste", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.announcement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesAnnouncementsList

Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsListAnnouncementStatesEnum;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsListRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsListResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsListSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAnnouncementsListRequest req = new ClassroomCoursesAnnouncementsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                announcementStates = new org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsListAnnouncementStatesEnum[]{{
                    add(ClassroomCoursesAnnouncementsListAnnouncementStatesEnum.DELETED),
                    add(ClassroomCoursesAnnouncementsListAnnouncementStatesEnum.PUBLISHED),
                    add(ClassroomCoursesAnnouncementsListAnnouncementStatesEnum.DRAFT),
                }};
                callback = "aliquid";
                fields = "dolorem";
                key = "dolorem";
                oauthToken = "dolor";
                orderBy = "qui";
                pageSize = 218749L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "cum";
                uploadProtocol = "voluptate";
            }};            

            ClassroomCoursesAnnouncementsListResponse res = sdk.courses.classroomCoursesAnnouncementsList(req, new ClassroomCoursesAnnouncementsListSecurity() {{
                option1 = new ClassroomCoursesAnnouncementsListSecurityOption1("dignissimos", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAnnouncementsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesAnnouncementsModifyAssignees

Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsModifyAssigneesRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsModifyAssigneesResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsModifyAssigneesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ModifyAnnouncementAssigneesRequest;
import org.openapis.openapi.models.shared.ModifyAnnouncementAssigneesRequestAssigneeModeEnum;
import org.openapis.openapi.models.shared.ModifyIndividualStudentsOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAnnouncementsModifyAssigneesRequest req = new ClassroomCoursesAnnouncementsModifyAssigneesRequest("amet", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                modifyAnnouncementAssigneesRequest = new ModifyAnnouncementAssigneesRequest() {{
                    assigneeMode = ModifyAnnouncementAssigneesRequestAssigneeModeEnum.ASSIGNEE_MODE_UNSPECIFIED;
                    modifyIndividualStudentsOptions = new ModifyIndividualStudentsOptions() {{
                        addStudentIds = new String[]{{
                            add("ipsa"),
                        }};
                        removeStudentIds = new String[]{{
                            add("odio"),
                            add("quaerat"),
                        }};
                    }};;
                }};;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "voluptas";
                key = "natus";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "sit";
                uploadProtocol = "fugiat";
            }};            

            ClassroomCoursesAnnouncementsModifyAssigneesResponse res = sdk.courses.classroomCoursesAnnouncementsModifyAssignees(req, new ClassroomCoursesAnnouncementsModifyAssigneesSecurity("ab", "soluta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.announcement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesAnnouncementsPatch

Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsPatchRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsPatchResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesAnnouncementsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Announcement;
import org.openapis.openapi.models.shared.AnnouncementAssigneeModeEnum;
import org.openapis.openapi.models.shared.AnnouncementStateEnum;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.IndividualStudentsOptions;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.Material;
import org.openapis.openapi.models.shared.SharedDriveFile;
import org.openapis.openapi.models.shared.SharedDriveFileShareModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAnnouncementsPatchRequest req = new ClassroomCoursesAnnouncementsPatchRequest("dolorum", "iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                announcement = new Announcement() {{
                    alternateLink = "dolorum";
                    assigneeMode = AnnouncementAssigneeModeEnum.ALL_STUDENTS;
                    courseId = "omnis";
                    creationTime = "necessitatibus";
                    creatorUserId = "distinctio";
                    id = "f737ae42-03ce-45e6-a95d-8a0d446ce2af";
                    individualStudentsOptions = new IndividualStudentsOptions() {{
                        studentIds = new String[]{{
                            add("harum"),
                            add("iusto"),
                        }};
                    }};;
                    materials = new org.openapis.openapi.models.shared.Material[]{{
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "quisquam";
                                    id = "f3be453f-870b-4326-b5a7-3429cdb1a842";
                                    thumbnailUrl = "dolores";
                                    title = "Miss";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.EDIT;
                            }};
                            form = new Form() {{
                                formUrl = "aliquid";
                                responseUrl = "quam";
                                thumbnailUrl = "molestias";
                                title = "Dr.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "qui";
                                title = "Mrs.";
                                url = "fugit";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "magni";
                                id = "715bf0cb-b1e3-41b8-b90f-3443a1108e0a";
                                thumbnailUrl = "repellendus";
                                title = "Miss";
                            }};
                        }}),
                    }};
                    scheduledTime = "doloribus";
                    state = AnnouncementStateEnum.PUBLISHED;
                    text = "facilis";
                    updateTime = "cupiditate";
                }};;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "odio";
                key = "occaecati";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "quisquam";
                updateMask = "vero";
                uploadType = "omnis";
                uploadProtocol = "quis";
            }};            

            ClassroomCoursesAnnouncementsPatchResponse res = sdk.courses.classroomCoursesAnnouncementsPatch(req, new ClassroomCoursesAnnouncementsPatchSecurity("ipsum", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.announcement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkCreate

Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkCreateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkCreateResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Assignment;
import org.openapis.openapi.models.shared.CourseWork;
import org.openapis.openapi.models.shared.CourseWorkAssigneeModeEnum;
import org.openapis.openapi.models.shared.CourseWorkStateEnum;
import org.openapis.openapi.models.shared.CourseWorkSubmissionModificationModeEnum;
import org.openapis.openapi.models.shared.CourseWorkWorkTypeEnum;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.DriveFolder;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.GradeCategory;
import org.openapis.openapi.models.shared.IndividualStudentsOptions;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.Material;
import org.openapis.openapi.models.shared.MultipleChoiceQuestion;
import org.openapis.openapi.models.shared.SharedDriveFile;
import org.openapis.openapi.models.shared.SharedDriveFileShareModeEnum;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkCreateRequest req = new ClassroomCoursesCourseWorkCreateRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                courseWork = new CourseWork() {{
                    alternateLink = "vero";
                    assigneeMode = CourseWorkAssigneeModeEnum.INDIVIDUAL_STUDENTS;
                    assignment = new Assignment() {{
                        studentWorkFolder = new DriveFolder() {{
                            alternateLink = "dignissimos";
                            id = "fbc7abd7-4dd3-49c0-b5d2-cff7c70a4562";
                            title = "Ms.";
                        }};;
                    }};;
                    associatedWithDeveloper = false;
                    courseId = "possimus";
                    creationTime = "magnam";
                    creatorUserId = "ratione";
                    description = "ex";
                    dueDate = new Date() {{
                        day = 511319;
                        month = 120657;
                        year = 224317;
                    }};;
                    dueTime = new TimeOfDay() {{
                        hours = 980700;
                        minutes = 97844;
                        nanos = 406120;
                        seconds = 862192;
                    }};;
                    gradeCategory = new GradeCategory() {{
                        defaultGradeDenominator = 569211;
                        id = "f5fce6c5-5614-46c3-a250-fb008c42e141";
                        name = "Neal Schroeder";
                        weight = 420539;
                    }};;
                    id = "c8dd6b14-4290-4747-8778-a7bd466d28c1";
                    individualStudentsOptions = new IndividualStudentsOptions() {{
                        studentIds = new String[]{{
                            add("id"),
                        }};
                    }};;
                    materials = new org.openapis.openapi.models.shared.Material[]{{
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "neque";
                                    id = "cdca4251-904e-4523-87e0-bc7178e4796f";
                                    thumbnailUrl = "dolores";
                                    title = "Miss";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.VIEW;
                            }};
                            form = new Form() {{
                                formUrl = "accusantium";
                                responseUrl = "porro";
                                thumbnailUrl = "eum";
                                title = "Ms.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "praesentium";
                                title = "Mr.";
                                url = "deleniti";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "fugit";
                                id = "aa482562-f222-4e98-97ee-17cbe61e6b7b";
                                thumbnailUrl = "occaecati";
                                title = "Mrs.";
                            }};
                        }}),
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "distinctio";
                                    id = "c0ab3c20-c4f3-4789-bd87-1f99dd2efd12";
                                    thumbnailUrl = "quasi";
                                    title = "Miss";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.EDIT;
                            }};
                            form = new Form() {{
                                formUrl = "aliquid";
                                responseUrl = "tenetur";
                                thumbnailUrl = "quae";
                                title = "Dr.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "vel";
                                title = "Ms.";
                                url = "eius";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "libero";
                                id = "db04f157-5608-42d6-8ea1-9f1d17051339";
                                thumbnailUrl = "temporibus";
                                title = "Mr.";
                            }};
                        }}),
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "rem";
                                    id = "086a1840-394c-4260-b1f9-3f5f0642dac7";
                                    thumbnailUrl = "officia";
                                    title = "Dr.";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.VIEW;
                            }};
                            form = new Form() {{
                                formUrl = "quae";
                                responseUrl = "quaerat";
                                thumbnailUrl = "porro";
                                title = "Dr.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "labore";
                                title = "Mr.";
                                url = "adipisci";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "fuga";
                                id = "a63aae8d-6786-44db-b675-fd5e60b375ed";
                                thumbnailUrl = "numquam";
                                title = "Dr.";
                            }};
                        }}),
                    }};
                    maxPoints = 3817.6;
                    multipleChoiceQuestion = new MultipleChoiceQuestion() {{
                        choices = new String[]{{
                            add("quidem"),
                            add("saepe"),
                            add("necessitatibus"),
                            add("dolore"),
                        }};
                    }};;
                    scheduledTime = "sunt";
                    state = CourseWorkStateEnum.DELETED;
                    submissionModificationMode = CourseWorkSubmissionModificationModeEnum.SUBMISSION_MODIFICATION_MODE_UNSPECIFIED;
                    title = "Mrs.";
                    topicId = "amet";
                    updateTime = "beatae";
                    workType = CourseWorkWorkTypeEnum.ASSIGNMENT;
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "corporis";
                key = "harum";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "voluptates";
                uploadProtocol = "libero";
            }};            

            ClassroomCoursesCourseWorkCreateResponse res = sdk.courses.classroomCoursesCourseWorkCreate(req, new ClassroomCoursesCourseWorkCreateSecurity("vitae", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.courseWork != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkDelete

Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkDeleteRequest req = new ClassroomCoursesCourseWorkDeleteRequest("similique", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "minima";
                key = "nobis";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "minus";
                uploadProtocol = "dolores";
            }};            

            ClassroomCoursesCourseWorkDeleteResponse res = sdk.courses.classroomCoursesCourseWorkDelete(req, new ClassroomCoursesCourseWorkDeleteSecurity("blanditiis", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkGet

Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkGetRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkGetResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkGetSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkGetSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkGetSecurityOption3;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkGetRequest req = new ClassroomCoursesCourseWorkGetRequest("dolore", "aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "cum";
                key = "blanditiis";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "nesciunt";
                uploadProtocol = "culpa";
            }};            

            ClassroomCoursesCourseWorkGetResponse res = sdk.courses.classroomCoursesCourseWorkGet(req, new ClassroomCoursesCourseWorkGetSecurity() {{
                option1 = new ClassroomCoursesCourseWorkGetSecurityOption1("corrupti", "pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.courseWork != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkList

Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkListCourseWorkStatesEnum;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkListRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkListResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkListSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkListSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkListSecurityOption3;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkListRequest req = new ClassroomCoursesCourseWorkListRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "sit";
                courseWorkStates = new org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkListCourseWorkStatesEnum[]{{
                    add(ClassroomCoursesCourseWorkListCourseWorkStatesEnum.COURSE_WORK_STATE_UNSPECIFIED),
                    add(ClassroomCoursesCourseWorkListCourseWorkStatesEnum.DELETED),
                    add(ClassroomCoursesCourseWorkListCourseWorkStatesEnum.COURSE_WORK_STATE_UNSPECIFIED),
                }};
                fields = "asperiores";
                key = "facilis";
                oauthToken = "voluptate";
                orderBy = "expedita";
                pageSize = 70869L;
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "laborum";
                uploadProtocol = "sed";
            }};            

            ClassroomCoursesCourseWorkListResponse res = sdk.courses.classroomCoursesCourseWorkList(req, new ClassroomCoursesCourseWorkListSecurity() {{
                option1 = new ClassroomCoursesCourseWorkListSecurityOption1("in", "commodi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listCourseWorkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkModifyAssignees

Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkModifyAssigneesRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkModifyAssigneesResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkModifyAssigneesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ModifyCourseWorkAssigneesRequest;
import org.openapis.openapi.models.shared.ModifyCourseWorkAssigneesRequestAssigneeModeEnum;
import org.openapis.openapi.models.shared.ModifyIndividualStudentsOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkModifyAssigneesRequest req = new ClassroomCoursesCourseWorkModifyAssigneesRequest("quidem", "explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                modifyCourseWorkAssigneesRequest = new ModifyCourseWorkAssigneesRequest() {{
                    assigneeMode = ModifyCourseWorkAssigneesRequestAssigneeModeEnum.ALL_STUDENTS;
                    modifyIndividualStudentsOptions = new ModifyIndividualStudentsOptions() {{
                        addStudentIds = new String[]{{
                            add("suscipit"),
                        }};
                        removeStudentIds = new String[]{{
                            add("debitis"),
                            add("illo"),
                            add("reiciendis"),
                            add("perferendis"),
                        }};
                    }};;
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "sed";
                key = "provident";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "ipsum";
                uploadProtocol = "ea";
            }};            

            ClassroomCoursesCourseWorkModifyAssigneesResponse res = sdk.courses.classroomCoursesCourseWorkModifyAssignees(req, new ClassroomCoursesCourseWorkModifyAssigneesSecurity("occaecati", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.courseWork != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkPatch

Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkPatchRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkPatchResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Assignment;
import org.openapis.openapi.models.shared.CourseWork;
import org.openapis.openapi.models.shared.CourseWorkAssigneeModeEnum;
import org.openapis.openapi.models.shared.CourseWorkStateEnum;
import org.openapis.openapi.models.shared.CourseWorkSubmissionModificationModeEnum;
import org.openapis.openapi.models.shared.CourseWorkWorkTypeEnum;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.DriveFolder;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.GradeCategory;
import org.openapis.openapi.models.shared.IndividualStudentsOptions;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.Material;
import org.openapis.openapi.models.shared.MultipleChoiceQuestion;
import org.openapis.openapi.models.shared.SharedDriveFile;
import org.openapis.openapi.models.shared.SharedDriveFileShareModeEnum;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkPatchRequest req = new ClassroomCoursesCourseWorkPatchRequest("voluptatibus", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                courseWork = new CourseWork() {{
                    alternateLink = "voluptate";
                    assigneeMode = CourseWorkAssigneeModeEnum.INDIVIDUAL_STUDENTS;
                    assignment = new Assignment() {{
                        studentWorkFolder = new DriveFolder() {{
                            alternateLink = "ex";
                            id = "03e8b445-e80c-4a55-afd2-0e457e1858b6";
                            title = "Miss";
                        }};;
                    }};;
                    associatedWithDeveloper = false;
                    courseId = "voluptatum";
                    creationTime = "error";
                    creatorUserId = "hic";
                    description = "expedita";
                    dueDate = new Date() {{
                        day = 892863;
                        month = 204923;
                        year = 677115;
                    }};;
                    dueTime = new TimeOfDay() {{
                        hours = 341698;
                        minutes = 639028;
                        nanos = 676243;
                        seconds = 548361;
                    }};;
                    gradeCategory = new GradeCategory() {{
                        defaultGradeDenominator = 879235;
                        id = "4824d0ab-4075-4088-a518-62065e904f3b";
                        name = "Diane Mayer";
                        weight = 539074;
                    }};;
                    id = "abf603a7-9f9d-4fe0-ab7d-a8a50ce187f8";
                    individualStudentsOptions = new IndividualStudentsOptions() {{
                        studentIds = new String[]{{
                            add("quidem"),
                            add("maxime"),
                        }};
                    }};;
                    materials = new org.openapis.openapi.models.shared.Material[]{{
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "esse";
                                    id = "3d689eee-9526-4f8d-986e-881ead4f0e10";
                                    thumbnailUrl = "beatae";
                                    title = "Mr.";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.VIEW;
                            }};
                            form = new Form() {{
                                formUrl = "laboriosam";
                                responseUrl = "velit";
                                thumbnailUrl = "a";
                                title = "Ms.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "magnam";
                                title = "Dr.";
                                url = "consequuntur";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "occaecati";
                                id = "e973e922-a57a-415b-a3e0-60807e2b6e3a";
                                thumbnailUrl = "distinctio";
                                title = "Ms.";
                            }};
                        }}),
                    }};
                    maxPoints = 5230.06;
                    multipleChoiceQuestion = new MultipleChoiceQuestion() {{
                        choices = new String[]{{
                            add("ad"),
                            add("repellat"),
                        }};
                    }};;
                    scheduledTime = "alias";
                    state = CourseWorkStateEnum.PUBLISHED;
                    submissionModificationMode = CourseWorkSubmissionModificationModeEnum.MODIFIABLE_UNTIL_TURNED_IN;
                    title = "Ms.";
                    topicId = "mollitia";
                    updateTime = "voluptas";
                    workType = CourseWorkWorkTypeEnum.COURSE_WORK_TYPE_UNSPECIFIED;
                }};;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "id";
                key = "minima";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "dolorum";
                updateMask = "nesciunt";
                uploadType = "quae";
                uploadProtocol = "recusandae";
            }};            

            ClassroomCoursesCourseWorkPatchResponse res = sdk.courses.classroomCoursesCourseWorkPatch(req, new ClassroomCoursesCourseWorkPatchSecurity("omnis", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.courseWork != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkStudentSubmissionsGet

Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsGetRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsGetResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkStudentSubmissionsGetRequest req = new ClassroomCoursesCourseWorkStudentSubmissionsGetRequest("molestiae", "ex", "ut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "laudantium";
                fields = "eum";
                key = "nemo";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "provident";
                uploadProtocol = "quis";
            }};            

            ClassroomCoursesCourseWorkStudentSubmissionsGetResponse res = sdk.courses.classroomCoursesCourseWorkStudentSubmissionsGet(req, new ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity() {{
                option1 = new ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1("eum", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.studentSubmission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkStudentSubmissionsList

Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkStudentSubmissionsListRequest req = new ClassroomCoursesCourseWorkStudentSubmissionsListRequest("provident", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "nostrum";
                fields = "mollitia";
                key = "provident";
                late = ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum.NOT_LATE_ONLY;
                oauthToken = "animi";
                pageSize = 402767L;
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "accusantium";
                states = new org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum[]{{
                    add(ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum.RECLAIMED_BY_STUDENT),
                    add(ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum.CREATED),
                    add(ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum.CREATED),
                    add(ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum.RETURNED),
                }};
                uploadType = "earum";
                uploadProtocol = "officia";
                userId = "laborum";
            }};            

            ClassroomCoursesCourseWorkStudentSubmissionsListResponse res = sdk.courses.classroomCoursesCourseWorkStudentSubmissionsList(req, new ClassroomCoursesCourseWorkStudentSubmissionsListSecurity() {{
                option1 = new ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1("placeat", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listStudentSubmissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkStudentSubmissionsModifyAttachments

Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Attachment;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.ModifyAttachmentsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest req = new ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest("voluptatibus", "molestias", "officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                modifyAttachmentsRequest = new ModifyAttachmentsRequest() {{
                    addAttachments = new org.openapis.openapi.models.shared.Attachment[]{{
                        add(new Attachment() {{
                            driveFile = new DriveFile() {{
                                alternateLink = "vitae";
                                id = "b4512c10-3264-48dc-af61-5199ebfd0e9f";
                                thumbnailUrl = "debitis";
                                title = "Mrs.";
                            }};
                            form = new Form() {{
                                formUrl = "porro";
                                responseUrl = "suscipit";
                                thumbnailUrl = "dolorem";
                                title = "Mr.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "cumque";
                                title = "Miss";
                                url = "ratione";
                            }};
                            youTubeVideo = new YouTubeVideo() {{
                                alternateLink = "animi";
                                id = "ed011799-6312-4fde-8477-1778ff61d017";
                                thumbnailUrl = "tempora";
                                title = "Ms.";
                            }};
                        }}),
                        add(new Attachment() {{
                            driveFile = new DriveFile() {{
                                alternateLink = "ex";
                                id = "360a15db-6a66-4065-9a1a-deaab5851d6c";
                                thumbnailUrl = "ex";
                                title = "Mrs.";
                            }};
                            form = new Form() {{
                                formUrl = "ad";
                                responseUrl = "expedita";
                                thumbnailUrl = "voluptatem";
                                title = "Ms.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "cum";
                                title = "Mrs.";
                                url = "beatae";
                            }};
                            youTubeVideo = new YouTubeVideo() {{
                                alternateLink = "voluptatum";
                                id = "91baa0fe-1ade-4008-a6f8-c5f350d8cdb5";
                                thumbnailUrl = "culpa";
                                title = "Mrs.";
                            }};
                        }}),
                        add(new Attachment() {{
                            driveFile = new DriveFile() {{
                                alternateLink = "aliquam";
                                id = "18143010-4218-413d-9208-ece7e253b668";
                                thumbnailUrl = "magnam";
                                title = "Mrs.";
                            }};
                            form = new Form() {{
                                formUrl = "ab";
                                responseUrl = "porro";
                                thumbnailUrl = "autem";
                                title = "Miss";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "laboriosam";
                                title = "Dr.";
                                url = "consequuntur";
                            }};
                            youTubeVideo = new YouTubeVideo() {{
                                alternateLink = "voluptatem";
                                id = "5e16deab-3fec-4957-8a64-584273a8418d";
                                thumbnailUrl = "dicta";
                                title = "Mrs.";
                            }};
                        }}),
                        add(new Attachment() {{
                            driveFile = new DriveFile() {{
                                alternateLink = "consequuntur";
                                id = "309fb092-9921-4aef-b9f5-8c4d86e68e4b";
                                thumbnailUrl = "vero";
                                title = "Mr.";
                            }};
                            form = new Form() {{
                                formUrl = "ipsam";
                                responseUrl = "vel";
                                thumbnailUrl = "alias";
                                title = "Mr.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "non";
                                title = "Dr.";
                                url = "enim";
                            }};
                            youTubeVideo = new YouTubeVideo() {{
                                alternateLink = "sint";
                                id = "da757a59-ecfe-4f66-af1c-aa3383c2beb4";
                                thumbnailUrl = "iusto";
                                title = "Ms.";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "sequi";
                alt = AltEnum.MEDIA;
                callback = "neque";
                fields = "quo";
                key = "deleniti";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odit";
                uploadProtocol = "voluptatibus";
            }};            

            ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse res = sdk.courses.classroomCoursesCourseWorkStudentSubmissionsModifyAttachments(req, new ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity() {{
                option1 = new ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1("vel", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.studentSubmission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkStudentSubmissionsPatch

Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssignmentSubmission;
import org.openapis.openapi.models.shared.Attachment;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.GradeHistory;
import org.openapis.openapi.models.shared.GradeHistoryGradeChangeTypeEnum;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.MultipleChoiceSubmission;
import org.openapis.openapi.models.shared.ShortAnswerSubmission;
import org.openapis.openapi.models.shared.StateHistory;
import org.openapis.openapi.models.shared.StateHistoryStateEnum;
import org.openapis.openapi.models.shared.StudentSubmission;
import org.openapis.openapi.models.shared.StudentSubmissionCourseWorkTypeEnum;
import org.openapis.openapi.models.shared.StudentSubmissionStateEnum;
import org.openapis.openapi.models.shared.SubmissionHistory;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest req = new ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest("quibusdam", "inventore", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                studentSubmission = new StudentSubmission() {{
                    alternateLink = "architecto";
                    assignedGrade = 9754.25;
                    assignmentSubmission = new AssignmentSubmission() {{
                        attachments = new org.openapis.openapi.models.shared.Attachment[]{{
                            add(new Attachment() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "porro";
                                    id = "4310661e-9634-49e1-8f9e-06e3a437000a";
                                    thumbnailUrl = "recusandae";
                                    title = "Ms.";
                                }};
                                form = new Form() {{
                                    formUrl = "quidem";
                                    responseUrl = "voluptas";
                                    thumbnailUrl = "facilis";
                                    title = "Dr.";
                                }};
                                link = new Link() {{
                                    thumbnailUrl = "perspiciatis";
                                    title = "Miss";
                                    url = "deleniti";
                                }};
                                youTubeVideo = new YouTubeVideo() {{
                                    alternateLink = "a";
                                    id = "759eac55-a974-41d3-9135-2965bb8a7202";
                                    thumbnailUrl = "vel";
                                    title = "Mr.";
                                }};
                            }}),
                        }};
                    }};;
                    associatedWithDeveloper = false;
                    courseId = "quae";
                    courseWorkId = "modi";
                    courseWorkType = StudentSubmissionCourseWorkTypeEnum.COURSE_WORK_TYPE_UNSPECIFIED;
                    creationTime = "exercitationem";
                    draftGrade = 9323.94;
                    id = "139dbc22-59b1-4abd-a8c0-70e1084cb067";
                    late = false;
                    multipleChoiceSubmission = new MultipleChoiceSubmission() {{
                        answer = "dolores";
                    }};;
                    shortAnswerSubmission = new ShortAnswerSubmission() {{
                        answer = "assumenda";
                    }};;
                    state = StudentSubmissionStateEnum.SUBMISSION_STATE_UNSPECIFIED;
                    submissionHistory = new org.openapis.openapi.models.shared.SubmissionHistory[]{{
                        add(new SubmissionHistory() {{
                            gradeHistory = new GradeHistory() {{
                                actorUserId = "facere";
                                gradeChangeType = GradeHistoryGradeChangeTypeEnum.ASSIGNED_GRADE_POINTS_EARNED_CHANGE;
                                gradeTimestamp = "molestiae";
                                maxPoints = 5888.12;
                                pointsEarned = 8822.84;
                            }};
                            stateHistory = new StateHistory() {{
                                actorUserId = "necessitatibus";
                                state = StateHistoryStateEnum.RECLAIMED_BY_STUDENT;
                                stateTimestamp = "sint";
                            }};
                        }}),
                        add(new SubmissionHistory() {{
                            gradeHistory = new GradeHistory() {{
                                actorUserId = "ea";
                                gradeChangeType = GradeHistoryGradeChangeTypeEnum.DRAFT_GRADE_POINTS_EARNED_CHANGE;
                                gradeTimestamp = "ipsam";
                                maxPoints = 7029.52;
                                pointsEarned = 5156.38;
                            }};
                            stateHistory = new StateHistory() {{
                                actorUserId = "corporis";
                                state = StateHistoryStateEnum.STUDENT_EDITED_AFTER_TURN_IN;
                                stateTimestamp = "voluptatibus";
                            }};
                        }}),
                        add(new SubmissionHistory() {{
                            gradeHistory = new GradeHistory() {{
                                actorUserId = "cum";
                                gradeChangeType = GradeHistoryGradeChangeTypeEnum.MAX_POINTS_CHANGE;
                                gradeTimestamp = "alias";
                                maxPoints = 1566.53;
                                pointsEarned = 6941.58;
                            }};
                            stateHistory = new StateHistory() {{
                                actorUserId = "fuga";
                                state = StateHistoryStateEnum.STUDENT_EDITED_AFTER_TURN_IN;
                                stateTimestamp = "accusantium";
                            }};
                        }}),
                    }};
                    updateTime = "expedita";
                    userId = "officiis";
                }};;
                accessToken = "eos";
                alt = AltEnum.PROTO;
                callback = "odio";
                fields = "praesentium";
                key = "odit";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "corporis";
                updateMask = "error";
                uploadType = "earum";
                uploadProtocol = "adipisci";
            }};            

            ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse res = sdk.courses.classroomCoursesCourseWorkStudentSubmissionsPatch(req, new ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity() {{
                option1 = new ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1("recusandae", "similique") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.studentSubmission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkStudentSubmissionsReclaim

Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest req = new ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest("ut", "quidem", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("molestiae", "delectus");
                    put("cupiditate", "fugit");
                    put("numquam", "numquam");
                }};
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "dignissimos";
                key = "optio";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "qui";
                uploadProtocol = "expedita";
            }};            

            ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse res = sdk.courses.classroomCoursesCourseWorkStudentSubmissionsReclaim(req, new ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity("voluptatum", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkStudentSubmissionsReturn

Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest req = new ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest("minima", "placeat", "enim") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("minus", "eum");
                    put("modi", "corporis");
                }};
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "tempore";
                key = "aperiam";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "labore";
                uploadProtocol = "totam";
            }};            

            ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse res = sdk.courses.classroomCoursesCourseWorkStudentSubmissionsReturn(req, new ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity("occaecati", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkStudentSubmissionsTurnIn

Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsTurnInRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsTurnInResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkStudentSubmissionsTurnInSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkStudentSubmissionsTurnInRequest req = new ClassroomCoursesCourseWorkStudentSubmissionsTurnInRequest("quo", "velit", "minus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("est", "impedit");
                    put("delectus", "tempore");
                }};
                accessToken = "vero";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "pariatur";
                key = "nemo";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "odio";
                uploadProtocol = "minima";
            }};            

            ClassroomCoursesCourseWorkStudentSubmissionsTurnInResponse res = sdk.courses.classroomCoursesCourseWorkStudentSubmissionsTurnIn(req, new ClassroomCoursesCourseWorkStudentSubmissionsTurnInSecurity("in", "ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkMaterialsCreate

Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsCreateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsCreateResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CourseWorkMaterial;
import org.openapis.openapi.models.shared.CourseWorkMaterialAssigneeModeEnum;
import org.openapis.openapi.models.shared.CourseWorkMaterialStateEnum;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.IndividualStudentsOptions;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.Material;
import org.openapis.openapi.models.shared.SharedDriveFile;
import org.openapis.openapi.models.shared.SharedDriveFileShareModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkMaterialsCreateRequest req = new ClassroomCoursesCourseWorkMaterialsCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                courseWorkMaterial = new CourseWorkMaterial() {{
                    alternateLink = "error";
                    assigneeMode = CourseWorkMaterialAssigneeModeEnum.ASSIGNEE_MODE_UNSPECIFIED;
                    courseId = "ducimus";
                    creationTime = "voluptate";
                    creatorUserId = "pariatur";
                    description = "itaque";
                    id = "ac646ecb-5734-409e-beb1-e5a2b12eb07f";
                    individualStudentsOptions = new IndividualStudentsOptions() {{
                        studentIds = new String[]{{
                            add("quasi"),
                        }};
                    }};;
                    materials = new org.openapis.openapi.models.shared.Material[]{{
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "pariatur";
                                    id = "b99545fc-95fa-4889-b0e1-89dbb30fcb33";
                                    thumbnailUrl = "saepe";
                                    title = "Miss";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.UNKNOWN_SHARE_MODE;
                            }};
                            form = new Form() {{
                                formUrl = "quis";
                                responseUrl = "veniam";
                                thumbnailUrl = "libero";
                                title = "Mr.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "cupiditate";
                                title = "Ms.";
                                url = "eligendi";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "possimus";
                                id = "44e2f52d-82d3-4513-bb6f-48b656bcdb35";
                                thumbnailUrl = "voluptatibus";
                                title = "Dr.";
                            }};
                        }}),
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "consequuntur";
                                    id = "e4b27537-a8cd-49e7-b19c-177d525f77b1";
                                    thumbnailUrl = "ab";
                                    title = "Mrs.";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.STUDENT_COPY;
                            }};
                            form = new Form() {{
                                formUrl = "saepe";
                                responseUrl = "tempore";
                                thumbnailUrl = "veniam";
                                title = "Mr.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "reiciendis";
                                title = "Dr.";
                                url = "reprehenderit";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "praesentium";
                                id = "5fc37814-d4c9-48e0-82bb-89eb75dad636";
                                thumbnailUrl = "impedit";
                                title = "Ms.";
                            }};
                        }}),
                    }};
                    scheduledTime = "aut";
                    state = CourseWorkMaterialStateEnum.COURSEWORK_MATERIAL_STATE_UNSPECIFIED;
                    title = "Mrs.";
                    topicId = "quae";
                    updateTime = "amet";
                }};;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "cum";
                key = "amet";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "laudantium";
                uploadProtocol = "doloremque";
            }};            

            ClassroomCoursesCourseWorkMaterialsCreateResponse res = sdk.courses.classroomCoursesCourseWorkMaterialsCreate(req, new ClassroomCoursesCourseWorkMaterialsCreateSecurity("earum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.courseWorkMaterial != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkMaterialsDelete

Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkMaterialsDeleteRequest req = new ClassroomCoursesCourseWorkMaterialsDeleteRequest("amet", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "consequatur";
                key = "nemo";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "facilis";
                uploadProtocol = "corrupti";
            }};            

            ClassroomCoursesCourseWorkMaterialsDeleteResponse res = sdk.courses.classroomCoursesCourseWorkMaterialsDelete(req, new ClassroomCoursesCourseWorkMaterialsDeleteSecurity("aperiam", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkMaterialsGet

Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsGetRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsGetResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsGetSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkMaterialsGetRequest req = new ClassroomCoursesCourseWorkMaterialsGetRequest("accusamus", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "dolor";
                key = "sunt";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "occaecati";
                uploadProtocol = "atque";
            }};            

            ClassroomCoursesCourseWorkMaterialsGetResponse res = sdk.courses.classroomCoursesCourseWorkMaterialsGet(req, new ClassroomCoursesCourseWorkMaterialsGetSecurity() {{
                option1 = new ClassroomCoursesCourseWorkMaterialsGetSecurityOption1("beatae", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.courseWorkMaterial != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkMaterialsList

Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsListRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsListResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsListSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkMaterialsListRequest req = new ClassroomCoursesCourseWorkMaterialsListRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "perferendis";
                courseWorkMaterialStates = new org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum[]{{
                    add(ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum.PUBLISHED),
                    add(ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum.COURSEWORK_MATERIAL_STATE_UNSPECIFIED),
                    add(ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum.PUBLISHED),
                }};
                fields = "repellat";
                key = "velit";
                materialDriveId = "porro";
                materialLink = "provident";
                oauthToken = "consectetur";
                orderBy = "eligendi";
                pageSize = 490110L;
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "natus";
                uploadProtocol = "temporibus";
            }};            

            ClassroomCoursesCourseWorkMaterialsListResponse res = sdk.courses.classroomCoursesCourseWorkMaterialsList(req, new ClassroomCoursesCourseWorkMaterialsListSecurity() {{
                option1 = new ClassroomCoursesCourseWorkMaterialsListSecurityOption1("officia", "amet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listCourseWorkMaterialResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCourseWorkMaterialsPatch

Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsPatchRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsPatchResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCourseWorkMaterialsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CourseWorkMaterial;
import org.openapis.openapi.models.shared.CourseWorkMaterialAssigneeModeEnum;
import org.openapis.openapi.models.shared.CourseWorkMaterialStateEnum;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.IndividualStudentsOptions;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.Material;
import org.openapis.openapi.models.shared.SharedDriveFile;
import org.openapis.openapi.models.shared.SharedDriveFileShareModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCourseWorkMaterialsPatchRequest req = new ClassroomCoursesCourseWorkMaterialsPatchRequest("tenetur", "aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                courseWorkMaterial = new CourseWorkMaterial() {{
                    alternateLink = "itaque";
                    assigneeMode = CourseWorkMaterialAssigneeModeEnum.INDIVIDUAL_STUDENTS;
                    courseId = "laborum";
                    creationTime = "dignissimos";
                    creatorUserId = "vero";
                    description = "qui";
                    id = "3f225741-1faf-44b7-944e-472e802857a5";
                    individualStudentsOptions = new IndividualStudentsOptions() {{
                        studentIds = new String[]{{
                            add("magnam"),
                            add("sit"),
                            add("modi"),
                        }};
                    }};;
                    materials = new org.openapis.openapi.models.shared.Material[]{{
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "nesciunt";
                                    id = "a7d575f1-400e-4764-ad73-34ec1b781b36";
                                    thumbnailUrl = "fuga";
                                    title = "Mr.";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.EDIT;
                            }};
                            form = new Form() {{
                                formUrl = "aut";
                                responseUrl = "quos";
                                thumbnailUrl = "laudantium";
                                title = "Dr.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "veritatis";
                                title = "Mr.";
                                url = "eaque";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "saepe";
                                id = "fada200e-f042-42eb-a164-cf9ab8366c72";
                                thumbnailUrl = "velit";
                                title = "Dr.";
                            }};
                        }}),
                        add(new Material() {{
                            driveFile = new SharedDriveFile() {{
                                driveFile = new DriveFile() {{
                                    alternateLink = "repellat";
                                    id = "da9e06be-e482-45c1-bc0e-115c80bff918";
                                    thumbnailUrl = "ullam";
                                    title = "Mrs.";
                                }};
                                shareMode = SharedDriveFileShareModeEnum.VIEW;
                            }};
                            form = new Form() {{
                                formUrl = "itaque";
                                responseUrl = "maxime";
                                thumbnailUrl = "modi";
                                title = "Mr.";
                            }};
                            link = new Link() {{
                                thumbnailUrl = "assumenda";
                                title = "Dr.";
                                url = "doloribus";
                            }};
                            youtubeVideo = new YouTubeVideo() {{
                                alternateLink = "impedit";
                                id = "ce8f1977-773e-4635-a2a7-b408f05e3d48";
                                thumbnailUrl = "doloribus";
                                title = "Dr.";
                            }};
                        }}),
                    }};
                    scheduledTime = "est";
                    state = CourseWorkMaterialStateEnum.DELETED;
                    title = "Mrs.";
                    topicId = "vitae";
                    updateTime = "nesciunt";
                }};;
                accessToken = "similique";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "nemo";
                key = "doloribus";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "unde";
                updateMask = "incidunt";
                uploadType = "explicabo";
                uploadProtocol = "ipsam";
            }};            

            ClassroomCoursesCourseWorkMaterialsPatchResponse res = sdk.courses.classroomCoursesCourseWorkMaterialsPatch(req, new ClassroomCoursesCourseWorkMaterialsPatchSecurity("cupiditate", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.courseWorkMaterial != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesCreate

Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserCannotOwnCourse * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesCreateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesCreateResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Course;
import org.openapis.openapi.models.shared.CourseCourseStateEnum;
import org.openapis.openapi.models.shared.CourseMaterial;
import org.openapis.openapi.models.shared.CourseMaterialSet;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.DriveFolder;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.GradeCategory;
import org.openapis.openapi.models.shared.GradebookSettings;
import org.openapis.openapi.models.shared.GradebookSettingsCalculationTypeEnum;
import org.openapis.openapi.models.shared.GradebookSettingsDisplaySettingEnum;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesCreateRequest req = new ClassroomCoursesCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                course = new Course() {{
                    alternateLink = "quidem";
                    calendarId = "nesciunt";
                    courseGroupEmail = "commodi";
                    courseMaterialSets = new org.openapis.openapi.models.shared.CourseMaterialSet[]{{
                        add(new CourseMaterialSet() {{
                            materials = new org.openapis.openapi.models.shared.CourseMaterial[]{{
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "veniam";
                                        id = "ea944f3b-756c-411f-ac37-a5126243835b";
                                        thumbnailUrl = "facilis";
                                        title = "Miss";
                                    }};
                                    form = new Form() {{
                                        formUrl = "sit";
                                        responseUrl = "nemo";
                                        thumbnailUrl = "culpa";
                                        title = "Mr.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "amet";
                                        title = "Miss";
                                        url = "modi";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "veniam";
                                        id = "cefc5fde-10a0-4ce2-969e-510019c6dc5e";
                                        thumbnailUrl = "velit";
                                        title = "Mrs.";
                                    }};
                                }}),
                            }};
                            title = "Ms.";
                        }}),
                        add(new CourseMaterialSet() {{
                            materials = new org.openapis.openapi.models.shared.CourseMaterial[]{{
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "sed";
                                        id = "799bfbbe-6949-4fb2-bb4e-cae6c3d5db3a";
                                        thumbnailUrl = "assumenda";
                                        title = "Dr.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "distinctio";
                                        responseUrl = "pariatur";
                                        thumbnailUrl = "ad";
                                        title = "Dr.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "laborum";
                                        title = "Dr.";
                                        url = "laborum";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "incidunt";
                                        id = "c506a8aa-94c0-4264-8cf5-e9d9a4578adc";
                                        thumbnailUrl = "quasi";
                                        title = "Miss";
                                    }};
                                }}),
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "quod";
                                        id = "600dec00-1ac8-402e-aec0-9ff8f0f816ff";
                                        thumbnailUrl = "velit";
                                        title = "Mrs.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "esse";
                                        responseUrl = "in";
                                        thumbnailUrl = "eligendi";
                                        title = "Mr.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "neque";
                                        title = "Dr.";
                                        url = "excepturi";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "accusantium";
                                        id = "2c14125b-0960-4a66-8151-a472af923c59";
                                        thumbnailUrl = "aliquam";
                                        title = "Ms.";
                                    }};
                                }}),
                            }};
                            title = "Dr.";
                        }}),
                        add(new CourseMaterialSet() {{
                            materials = new org.openapis.openapi.models.shared.CourseMaterial[]{{
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "velit";
                                        id = "f350cf87-6ffb-4901-86ec-bb4e243cf789";
                                        thumbnailUrl = "repellat";
                                        title = "Dr.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "animi";
                                        responseUrl = "maiores";
                                        thumbnailUrl = "itaque";
                                        title = "Dr.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "deserunt";
                                        title = "Mrs.";
                                        url = "velit";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "officiis";
                                        id = "5ae6e0ac-184c-42b9-8247-c88373a40e19";
                                        thumbnailUrl = "dolore";
                                        title = "Mr.";
                                    }};
                                }}),
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "maiores";
                                        id = "32e55055-756f-45d5-ad0b-d0af2dfe13db";
                                        thumbnailUrl = "dolore";
                                        title = "Dr.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "iure";
                                        responseUrl = "explicabo";
                                        thumbnailUrl = "minus";
                                        title = "Miss";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "dolorum";
                                        title = "Mrs.";
                                        url = "earum";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "praesentium";
                                        id = "941aebc0-b80a-4692-8d3b-2ecfcc8f8950";
                                        thumbnailUrl = "illo";
                                        title = "Mr.";
                                    }};
                                }}),
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "doloribus";
                                        id = "5dd3d6fa-1804-4e54-882f-168a363c8873";
                                        thumbnailUrl = "recusandae";
                                        title = "Mrs.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "blanditiis";
                                        responseUrl = "numquam";
                                        thumbnailUrl = "sequi";
                                        title = "Ms.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "sit";
                                        title = "Miss";
                                        url = "veritatis";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "tenetur";
                                        id = "6b8ca275-a60a-404c-895c-c699171b51c1";
                                        thumbnailUrl = "harum";
                                        title = "Dr.";
                                    }};
                                }}),
                            }};
                            title = "Miss";
                        }}),
                        add(new CourseMaterialSet() {{
                            materials = new org.openapis.openapi.models.shared.CourseMaterial[]{{
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "cumque";
                                        id = "f4b888eb-dfc4-4ccc-a99b-c7fc0b2dce10";
                                        thumbnailUrl = "laudantium";
                                        title = "Ms.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "dolor";
                                        responseUrl = "voluptates";
                                        thumbnailUrl = "tempora";
                                        title = "Mr.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "rerum";
                                        title = "Mr.";
                                        url = "voluptatem";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "eum";
                                        id = "d678878b-a858-41a5-8208-c54fefa9c95f";
                                        thumbnailUrl = "quia";
                                        title = "Dr.";
                                    }};
                                }}),
                            }};
                            title = "Miss";
                        }}),
                    }};
                    courseState = CourseCourseStateEnum.DECLINED;
                    creationTime = "quis";
                    description = "enim";
                    descriptionHeading = "eum";
                    enrollmentCode = "nemo";
                    gradebookSettings = new GradebookSettings() {{
                        calculationType = GradebookSettingsCalculationTypeEnum.WEIGHTED_CATEGORIES;
                        displaySetting = GradebookSettingsDisplaySettingEnum.DISPLAY_SETTING_UNSPECIFIED;
                        gradeCategories = new org.openapis.openapi.models.shared.GradeCategory[]{{
                            add(new GradeCategory() {{
                                defaultGradeDenominator = 487148;
                                id = "cfee8120-6e28-413f-a4a4-1c480d3f2132";
                                name = "Moses Beatty Jr.";
                                weight = 134173;
                            }}),
                        }};
                    }};;
                    guardiansEnabled = false;
                    id = "d514f4cc-6f18-4bf9-a21a-6a4f77a87ee3";
                    name = "Ray Prosacco";
                    ownerId = "ipsam";
                    room = "explicabo";
                    section = "impedit";
                    teacherFolder = new DriveFolder() {{
                        alternateLink = "aliquid";
                        id = "5b34418e-3bb9-41c8-9975-e0e8419d8f84";
                        title = "Dr.";
                    }};;
                    teacherGroupEmail = "architecto";
                    updateTime = "aliquam";
                }};;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "saepe";
                key = "consequatur";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "facere";
                uploadProtocol = "quisquam";
            }};            

            ClassroomCoursesCreateResponse res = sdk.courses.classroomCoursesCreate(req, new ClassroomCoursesCreateSecurity("cumque", "aliquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.course != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesDelete

Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesDeleteRequest req = new ClassroomCoursesDeleteRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "porro";
                key = "laborum";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "omnis";
                uploadProtocol = "aut";
            }};            

            ClassroomCoursesDeleteResponse res = sdk.courses.classroomCoursesDelete(req, new ClassroomCoursesDeleteSecurity("ipsam", "officia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesGet

Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesGetRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesGetResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesGetSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesGetRequest req = new ClassroomCoursesGetRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quia";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "ad";
                key = "nisi";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "laudantium";
                uploadProtocol = "sed";
            }};            

            ClassroomCoursesGetResponse res = sdk.courses.classroomCoursesGet(req, new ClassroomCoursesGetSecurity() {{
                option1 = new ClassroomCoursesGetSecurityOption1("odit", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.course != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesList

Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesListCourseStatesEnum;
import org.openapis.openapi.models.operations.ClassroomCoursesListRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesListResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesListSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesListRequest req = new ClassroomCoursesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                courseStates = new org.openapis.openapi.models.operations.ClassroomCoursesListCourseStatesEnum[]{{
                    add(ClassroomCoursesListCourseStatesEnum.PROVISIONED),
                }};
                fields = "dolore";
                key = "esse";
                oauthToken = "accusantium";
                pageSize = 718119L;
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quam";
                studentId = "est";
                teacherId = "aliquam";
                uploadType = "delectus";
                uploadProtocol = "culpa";
            }};            

            ClassroomCoursesListResponse res = sdk.courses.classroomCoursesList(req, new ClassroomCoursesListSecurity() {{
                option1 = new ClassroomCoursesListSecurityOption1("voluptatum", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listCoursesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesPatch

Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesPatchRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesPatchResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Course;
import org.openapis.openapi.models.shared.CourseCourseStateEnum;
import org.openapis.openapi.models.shared.CourseMaterial;
import org.openapis.openapi.models.shared.CourseMaterialSet;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.DriveFolder;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.GradeCategory;
import org.openapis.openapi.models.shared.GradebookSettings;
import org.openapis.openapi.models.shared.GradebookSettingsCalculationTypeEnum;
import org.openapis.openapi.models.shared.GradebookSettingsDisplaySettingEnum;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesPatchRequest req = new ClassroomCoursesPatchRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                course = new Course() {{
                    alternateLink = "voluptas";
                    calendarId = "non";
                    courseGroupEmail = "ullam";
                    courseMaterialSets = new org.openapis.openapi.models.shared.CourseMaterialSet[]{{
                        add(new CourseMaterialSet() {{
                            materials = new org.openapis.openapi.models.shared.CourseMaterial[]{{
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "doloribus";
                                        id = "ae54ebf6-0c32-41f0-a3b7-5d2367fe1a0c";
                                        thumbnailUrl = "minus";
                                        title = "Ms.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "possimus";
                                        responseUrl = "maiores";
                                        thumbnailUrl = "odio";
                                        title = "Ms.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "sapiente";
                                        title = "Mr.";
                                        url = "similique";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "nesciunt";
                                        id = "96d90c36-4b7c-415d-bbac-e188b1c4ee2c";
                                        thumbnailUrl = "quas";
                                        title = "Miss";
                                    }};
                                }}),
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "vel";
                                        id = "ce611fee-b1c7-4cbd-b6ee-c74378ba2531";
                                        thumbnailUrl = "iusto";
                                        title = "Ms.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "magnam";
                                        responseUrl = "odio";
                                        thumbnailUrl = "nulla";
                                        title = "Miss";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "cupiditate";
                                        title = "Mr.";
                                        url = "exercitationem";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "laborum";
                                        id = "d2caf5dd-6723-4dc0-b5ae-2f3a6b700878";
                                        thumbnailUrl = "molestiae";
                                        title = "Mrs.";
                                    }};
                                }}),
                            }};
                            title = "Ms.";
                        }}),
                        add(new CourseMaterialSet() {{
                            materials = new org.openapis.openapi.models.shared.CourseMaterial[]{{
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "quaerat";
                                        id = "3f5a6c98-b555-4540-80d4-0bcacc6cbd6b";
                                        thumbnailUrl = "enim";
                                        title = "Dr.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "consectetur";
                                        responseUrl = "necessitatibus";
                                        thumbnailUrl = "maxime";
                                        title = "Ms.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "voluptatem";
                                        title = "Ms.";
                                        url = "adipisci";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "accusantium";
                                        id = "4f926bad-2553-4819-b474-b0ed20e56248";
                                        thumbnailUrl = "hic";
                                        title = "Dr.";
                                    }};
                                }}),
                            }};
                            title = "Dr.";
                        }}),
                        add(new CourseMaterialSet() {{
                            materials = new org.openapis.openapi.models.shared.CourseMaterial[]{{
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "nesciunt";
                                        id = "9a910abd-cab6-4267-a696-e1ec00221b33";
                                        thumbnailUrl = "exercitationem";
                                        title = "Dr.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "praesentium";
                                        responseUrl = "unde";
                                        thumbnailUrl = "similique";
                                        title = "Miss";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "tempore";
                                        title = "Mrs.";
                                        url = "debitis";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "nobis";
                                        id = "fda8d0c5-49ef-4030-8497-8a61fa1cf206";
                                        thumbnailUrl = "atque";
                                        title = "Ms.";
                                    }};
                                }}),
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "tenetur";
                                        id = "77c1ffc7-1dca-4163-b2a3-c80a97ff334c";
                                        thumbnailUrl = "illum";
                                        title = "Dr.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "tenetur";
                                        responseUrl = "molestias";
                                        thumbnailUrl = "ipsam";
                                        title = "Ms.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "laborum";
                                        title = "Ms.";
                                        url = "voluptates";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "eum";
                                        id = "1876c6ab-21d2-49df-894d-6fecd7993900";
                                        thumbnailUrl = "eum";
                                        title = "Mrs.";
                                    }};
                                }}),
                            }};
                            title = "Miss";
                        }}),
                    }};
                    courseState = CourseCourseStateEnum.ARCHIVED;
                    creationTime = "assumenda";
                    description = "explicabo";
                    descriptionHeading = "fugiat";
                    enrollmentCode = "doloremque";
                    gradebookSettings = new GradebookSettings() {{
                        calculationType = GradebookSettingsCalculationTypeEnum.CALCULATION_TYPE_UNSPECIFIED;
                        displaySetting = GradebookSettingsDisplaySettingEnum.DISPLAY_SETTING_UNSPECIFIED;
                        gradeCategories = new org.openapis.openapi.models.shared.GradeCategory[]{{
                            add(new GradeCategory() {{
                                defaultGradeDenominator = 356805;
                                id = "5338cec0-86fa-421e-9152-cb3119167b8e";
                                name = "Myra Lubowitz";
                                weight = 32945;
                            }}),
                        }};
                    }};;
                    guardiansEnabled = false;
                    id = "3408d6d3-64ff-4d45-9906-d1263d48e935";
                    name = "Todd Schowalter";
                    ownerId = "quos";
                    room = "dicta";
                    section = "sapiente";
                    teacherFolder = new DriveFolder() {{
                        alternateLink = "ipsum";
                        id = "0be3e432-02d7-4216-9765-06641870d9d2";
                        title = "Mr.";
                    }};;
                    teacherGroupEmail = "voluptatibus";
                    updateTime = "unde";
                }};;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "adipisci";
                key = "doloremque";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "tempora";
                updateMask = "debitis";
                uploadType = "cumque";
                uploadProtocol = "maxime";
            }};            

            ClassroomCoursesPatchResponse res = sdk.courses.classroomCoursesPatch(req, new ClassroomCoursesPatchSecurity("et", "beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.course != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesStudentsCreate

Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsCreateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsCreateResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsCreateSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsCreateSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsCreateSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DriveFolder;
import org.openapis.openapi.models.shared.GlobalPermission;
import org.openapis.openapi.models.shared.GlobalPermissionPermissionEnum;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.Student;
import org.openapis.openapi.models.shared.UserProfile;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesStudentsCreateRequest req = new ClassroomCoursesStudentsCreateRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                student = new Student() {{
                    courseId = "quos";
                    profile = new UserProfile() {{
                        emailAddress = "ratione";
                        id = "6429068b-8502-4a55-a7f7-3bc845e320a3";
                        name = new Name() {{
                            familyName = "veritatis";
                            fullName = "error";
                            givenName = "voluptatibus";
                        }};;
                        permissions = new org.openapis.openapi.models.shared.GlobalPermission[]{{
                            add(new GlobalPermission() {{
                                permission = GlobalPermissionPermissionEnum.CREATE_COURSE;
                            }}),
                            add(new GlobalPermission() {{
                                permission = GlobalPermissionPermissionEnum.CREATE_COURSE;
                            }}),
                        }};
                        photoUrl = "quibusdam";
                        verifiedTeacher = false;
                    }};;
                    studentWorkFolder = new DriveFolder() {{
                        alternateLink = "earum";
                        id = "947c9a86-7bc4-4242-a665-816ddca8ef51";
                        title = "Dr.";
                    }};;
                    userId = "cumque";
                }};;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "cumque";
                enrollmentCode = "ipsam";
                fields = "occaecati";
                key = "ipsum";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "quasi";
                uploadProtocol = "fugit";
            }};            

            ClassroomCoursesStudentsCreateResponse res = sdk.courses.classroomCoursesStudentsCreate(req, new ClassroomCoursesStudentsCreateSecurity() {{
                option1 = new ClassroomCoursesStudentsCreateSecurityOption1("quo", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.student != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesStudentsDelete

Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesStudentsDeleteRequest req = new ClassroomCoursesStudentsDeleteRequest("mollitia", "id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "quam";
                key = "similique";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "facere";
                uploadProtocol = "nobis";
            }};            

            ClassroomCoursesStudentsDeleteResponse res = sdk.courses.classroomCoursesStudentsDelete(req, new ClassroomCoursesStudentsDeleteSecurity("at", "molestias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesStudentsGet

Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsGetRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsGetResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsGetSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsGetSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsGetSecurityOption3;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesStudentsGetRequest req = new ClassroomCoursesStudentsGetRequest("aut", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "corrupti";
                fields = "similique";
                key = "dolore";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "iste";
                uploadProtocol = "amet";
            }};            

            ClassroomCoursesStudentsGetResponse res = sdk.courses.classroomCoursesStudentsGet(req, new ClassroomCoursesStudentsGetSecurity() {{
                option1 = new ClassroomCoursesStudentsGetSecurityOption1("occaecati", "aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.student != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesStudentsList

Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsListRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsListResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsListSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsListSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsListSecurityOption3;
import org.openapis.openapi.models.operations.ClassroomCoursesStudentsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesStudentsListRequest req = new ClassroomCoursesStudentsListRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "voluptatem";
                key = "provident";
                oauthToken = "quas";
                pageSize = 218413L;
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "facilis";
                uploadProtocol = "maiores";
            }};            

            ClassroomCoursesStudentsListResponse res = sdk.courses.classroomCoursesStudentsList(req, new ClassroomCoursesStudentsListSecurity() {{
                option1 = new ClassroomCoursesStudentsListSecurityOption1("error", "recusandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listStudentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesTeachersCreate

Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersCreateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersCreateResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersCreateSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersCreateSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersCreateSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalPermission;
import org.openapis.openapi.models.shared.GlobalPermissionPermissionEnum;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.Teacher;
import org.openapis.openapi.models.shared.UserProfile;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesTeachersCreateRequest req = new ClassroomCoursesTeachersCreateRequest("a") {{
                dollarXgafv = XgafvEnum.ONE;
                teacher = new Teacher() {{
                    courseId = "sapiente";
                    profile = new UserProfile() {{
                        emailAddress = "voluptatibus";
                        id = "dd9f7f07-9af4-4d35-b24c-db0f4d281187";
                        name = new Name() {{
                            familyName = "fugiat";
                            fullName = "enim";
                            givenName = "iure";
                        }};;
                        permissions = new org.openapis.openapi.models.shared.GlobalPermission[]{{
                            add(new GlobalPermission() {{
                                permission = GlobalPermissionPermissionEnum.PERMISSION_UNSPECIFIED;
                            }}),
                            add(new GlobalPermission() {{
                                permission = GlobalPermissionPermissionEnum.PERMISSION_UNSPECIFIED;
                            }}),
                            add(new GlobalPermission() {{
                                permission = GlobalPermissionPermissionEnum.CREATE_COURSE;
                            }}),
                        }};
                        photoUrl = "nulla";
                        verifiedTeacher = false;
                    }};;
                    userId = "repudiandae";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "animi";
                key = "unde";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "nostrum";
                uploadProtocol = "eveniet";
            }};            

            ClassroomCoursesTeachersCreateResponse res = sdk.courses.classroomCoursesTeachersCreate(req, new ClassroomCoursesTeachersCreateSecurity() {{
                option1 = new ClassroomCoursesTeachersCreateSecurityOption1("laboriosam", "ratione") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.teacher != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesTeachersDelete

Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesTeachersDeleteRequest req = new ClassroomCoursesTeachersDeleteRequest("blanditiis", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "consequatur";
                key = "nesciunt";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "voluptas";
                uploadProtocol = "quo";
            }};            

            ClassroomCoursesTeachersDeleteResponse res = sdk.courses.classroomCoursesTeachersDelete(req, new ClassroomCoursesTeachersDeleteSecurity("laudantium", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesTeachersGet

Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersGetRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersGetResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersGetSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersGetSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersGetSecurityOption3;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesTeachersGetRequest req = new ClassroomCoursesTeachersGetRequest("omnis", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "debitis";
                key = "vitae";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "atque";
                uploadProtocol = "ut";
            }};            

            ClassroomCoursesTeachersGetResponse res = sdk.courses.classroomCoursesTeachersGet(req, new ClassroomCoursesTeachersGetSecurity() {{
                option1 = new ClassroomCoursesTeachersGetSecurityOption1("asperiores", "reprehenderit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.teacher != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesTeachersList

Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersListRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersListResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersListSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersListSecurityOption2;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersListSecurityOption3;
import org.openapis.openapi.models.operations.ClassroomCoursesTeachersListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesTeachersListRequest req = new ClassroomCoursesTeachersListRequest("deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "et";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "ex";
                key = "praesentium";
                oauthToken = "natus";
                pageSize = 112014L;
                pageToken = "tenetur";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "aspernatur";
                uploadProtocol = "eligendi";
            }};            

            ClassroomCoursesTeachersListResponse res = sdk.courses.classroomCoursesTeachersList(req, new ClassroomCoursesTeachersListSecurity() {{
                option1 = new ClassroomCoursesTeachersListSecurityOption1("repudiandae", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTeachersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesTopicsCreate

Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsCreateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsCreateResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Topic;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesTopicsCreateRequest req = new ClassroomCoursesTopicsCreateRequest("inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                topic = new Topic() {{
                    courseId = "iusto";
                    name = "Allison Corwin II";
                    topicId = "amet";
                    updateTime = "voluptate";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "a";
                key = "fuga";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "at";
                uploadProtocol = "doloribus";
            }};            

            ClassroomCoursesTopicsCreateResponse res = sdk.courses.classroomCoursesTopicsCreate(req, new ClassroomCoursesTopicsCreateSecurity("omnis", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.topic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesTopicsDelete

Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsDeleteRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsDeleteResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesTopicsDeleteRequest req = new ClassroomCoursesTopicsDeleteRequest("exercitationem", "voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "rem";
                key = "aliquid";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "fugit";
                uploadProtocol = "itaque";
            }};            

            ClassroomCoursesTopicsDeleteResponse res = sdk.courses.classroomCoursesTopicsDelete(req, new ClassroomCoursesTopicsDeleteSecurity("unde", "cumque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesTopicsGet

Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsGetRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsGetResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsGetSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsGetSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesTopicsGetRequest req = new ClassroomCoursesTopicsGetRequest("dolor", "repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "a";
                fields = "beatae";
                key = "vitae";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "earum";
                uploadProtocol = "laborum";
            }};            

            ClassroomCoursesTopicsGetResponse res = sdk.courses.classroomCoursesTopicsGet(req, new ClassroomCoursesTopicsGetSecurity() {{
                option1 = new ClassroomCoursesTopicsGetSecurityOption1("dicta", "voluptatem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.topic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesTopicsList

Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsListRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsListResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsListSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsListSecurityOption1;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesTopicsListRequest req = new ClassroomCoursesTopicsListRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "numquam";
                fields = "architecto";
                key = "est";
                oauthToken = "quaerat";
                pageSize = 816726L;
                pageToken = "vitae";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "alias";
                uploadProtocol = "sapiente";
            }};            

            ClassroomCoursesTopicsListResponse res = sdk.courses.classroomCoursesTopicsList(req, new ClassroomCoursesTopicsListSecurity() {{
                option1 = new ClassroomCoursesTopicsListSecurityOption1("officiis", "expedita") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTopicResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesTopicsPatch

Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsPatchRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsPatchResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesTopicsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Topic;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesTopicsPatchRequest req = new ClassroomCoursesTopicsPatchRequest("quia", "vitae") {{
                dollarXgafv = XgafvEnum.ONE;
                topic = new Topic() {{
                    courseId = "quas";
                    name = "Beulah Schulist";
                    topicId = "sit";
                    updateTime = "possimus";
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                fields = "illum";
                key = "soluta";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "laudantium";
                updateMask = "tempora";
                uploadType = "esse";
                uploadProtocol = "doloremque";
            }};            

            ClassroomCoursesTopicsPatchResponse res = sdk.courses.classroomCoursesTopicsPatch(req, new ClassroomCoursesTopicsPatchSecurity("corrupti", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.topic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classroomCoursesUpdate

Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassroomCoursesUpdateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesUpdateResponse;
import org.openapis.openapi.models.operations.ClassroomCoursesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Course;
import org.openapis.openapi.models.shared.CourseCourseStateEnum;
import org.openapis.openapi.models.shared.CourseMaterial;
import org.openapis.openapi.models.shared.CourseMaterialSet;
import org.openapis.openapi.models.shared.DriveFile;
import org.openapis.openapi.models.shared.DriveFolder;
import org.openapis.openapi.models.shared.Form;
import org.openapis.openapi.models.shared.GradeCategory;
import org.openapis.openapi.models.shared.GradebookSettings;
import org.openapis.openapi.models.shared.GradebookSettingsCalculationTypeEnum;
import org.openapis.openapi.models.shared.GradebookSettingsDisplaySettingEnum;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YouTubeVideo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesUpdateRequest req = new ClassroomCoursesUpdateRequest("facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                course = new Course() {{
                    alternateLink = "repudiandae";
                    calendarId = "amet";
                    courseGroupEmail = "natus";
                    courseMaterialSets = new org.openapis.openapi.models.shared.CourseMaterialSet[]{{
                        add(new CourseMaterialSet() {{
                            materials = new org.openapis.openapi.models.shared.CourseMaterial[]{{
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "eum";
                                        id = "bc158c4c-4e54-4599-aa34-2260e9b200ce";
                                        thumbnailUrl = "voluptate";
                                        title = "Ms.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "est";
                                        responseUrl = "et";
                                        thumbnailUrl = "expedita";
                                        title = "Dr.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "quos";
                                        title = "Dr.";
                                        url = "quidem";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "in";
                                        id = "a0a116ce-723d-4409-bfa3-0e9af725b291";
                                        thumbnailUrl = "qui";
                                        title = "Mr.";
                                    }};
                                }}),
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "consequatur";
                                        id = "30d83f5a-eb77-499d-a2e8-c1f8493825fd";
                                        thumbnailUrl = "porro";
                                        title = "Mrs.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "magni";
                                        responseUrl = "cumque";
                                        thumbnailUrl = "quos";
                                        title = "Ms.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "commodi";
                                        title = "Dr.";
                                        url = "sed";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "minus";
                                        id = "2dfb4cfc-1c76-4230-b841-fb1bd23fdb14";
                                        thumbnailUrl = "pariatur";
                                        title = "Miss";
                                    }};
                                }}),
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "autem";
                                        id = "be5a6859-98e2-42ae-a0da-16fc2b271a28";
                                        thumbnailUrl = "sint";
                                        title = "Dr.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "ullam";
                                        responseUrl = "molestiae";
                                        thumbnailUrl = "itaque";
                                        title = "Ms.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "nemo";
                                        title = "Mrs.";
                                        url = "recusandae";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "omnis";
                                        id = "0439d222-4656-4946-a407-084f7ab37cef";
                                        thumbnailUrl = "accusantium";
                                        title = "Mr.";
                                    }};
                                }}),
                                add(new CourseMaterial() {{
                                    driveFile = new DriveFile() {{
                                        alternateLink = "eos";
                                        id = "25194db5-5410-4adc-a69a-f90a26c7cdc9";
                                        thumbnailUrl = "deleniti";
                                        title = "Mr.";
                                    }};
                                    form = new Form() {{
                                        formUrl = "maiores";
                                        responseUrl = "voluptatem";
                                        thumbnailUrl = "aliquid";
                                        title = "Ms.";
                                    }};
                                    link = new Link() {{
                                        thumbnailUrl = "unde";
                                        title = "Ms.";
                                        url = "quae";
                                    }};
                                    youTubeVideo = new YouTubeVideo() {{
                                        alternateLink = "facere";
                                        id = "6bb33cfa-a348-4c31-bf40-7ee4fcf0c42b";
                                        thumbnailUrl = "nihil";
                                        title = "Ms.";
                                    }};
                                }}),
                            }};
                            title = "Dr.";
                        }}),
                    }};
                    courseState = CourseCourseStateEnum.COURSE_STATE_UNSPECIFIED;
                    creationTime = "ullam";
                    description = "nisi";
                    descriptionHeading = "consequuntur";
                    enrollmentCode = "voluptas";
                    gradebookSettings = new GradebookSettings() {{
                        calculationType = GradebookSettingsCalculationTypeEnum.CALCULATION_TYPE_UNSPECIFIED;
                        displaySetting = GradebookSettingsDisplaySettingEnum.HIDE_OVERALL_GRADE;
                        gradeCategories = new org.openapis.openapi.models.shared.GradeCategory[]{{
                            add(new GradeCategory() {{
                                defaultGradeDenominator = 667977;
                                id = "0dc76632-4ccb-406c-8ca1-2d02529270b8";
                                name = "Vernon Kuhn";
                                weight = 868729;
                            }}),
                            add(new GradeCategory() {{
                                defaultGradeDenominator = 850628;
                                id = "895b8bcf-24db-4959-a933-52f74533994d";
                                name = "Dianne Skiles";
                                weight = 716795;
                            }}),
                            add(new GradeCategory() {{
                                defaultGradeDenominator = 426691;
                                id = "e9389f5a-bb7f-4662-950a-28382ac483af";
                                name = "Mrs. Adam Feeney";
                                weight = 708360;
                            }}),
                        }};
                    }};;
                    guardiansEnabled = false;
                    id = "a650164e-06f5-4bf6-ae59-1bc8bdef3612";
                    name = "Marc Doyle";
                    ownerId = "alias";
                    room = "ad";
                    section = "a";
                    teacherFolder = new DriveFolder() {{
                        alternateLink = "facere";
                        id = "a840774a-68a9-4a35-9086-b6f66fef020e";
                        title = "Ms.";
                    }};;
                    teacherGroupEmail = "maiores";
                    updateTime = "quaerat";
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "incidunt";
                key = "dolores";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "libero";
                uploadProtocol = "omnis";
            }};            

            ClassroomCoursesUpdateResponse res = sdk.courses.classroomCoursesUpdate(req, new ClassroomCoursesUpdateSecurity("excepturi", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.course != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
