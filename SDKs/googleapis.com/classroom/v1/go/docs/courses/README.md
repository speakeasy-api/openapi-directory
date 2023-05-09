# Courses

### Available Operations

* [ClassroomCoursesAliasesCreate](#classroomcoursesaliasescreate) - Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).
* [ClassroomCoursesAliasesDelete](#classroomcoursesaliasesdelete) - Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).
* [ClassroomCoursesAliasesList](#classroomcoursesaliaseslist) - Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.
* [ClassroomCoursesAnnouncementsCreate](#classroomcoursesannouncementscreate) - Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
* [ClassroomCoursesAnnouncementsDelete](#classroomcoursesannouncementsdelete) - Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
* [ClassroomCoursesAnnouncementsGet](#classroomcoursesannouncementsget) - Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.
* [ClassroomCoursesAnnouncementsList](#classroomcoursesannouncementslist) - Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [ClassroomCoursesAnnouncementsModifyAssignees](#classroomcoursesannouncementsmodifyassignees) - Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
* [ClassroomCoursesAnnouncementsPatch](#classroomcoursesannouncementspatch) - Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist
* [ClassroomCoursesCourseWorkCreate](#classroomcoursescourseworkcreate) - Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
* [ClassroomCoursesCourseWorkDelete](#classroomcoursescourseworkdelete) - Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
* [ClassroomCoursesCourseWorkGet](#classroomcoursescourseworkget) - Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
* [ClassroomCoursesCourseWorkList](#classroomcoursescourseworklist) - Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [ClassroomCoursesCourseWorkModifyAssignees](#classroomcoursescourseworkmodifyassignees) - Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
* [ClassroomCoursesCourseWorkPatch](#classroomcoursescourseworkpatch) - Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [ClassroomCoursesCourseWorkStudentSubmissionsGet](#classroomcoursescourseworkstudentsubmissionsget) - Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [ClassroomCoursesCourseWorkStudentSubmissionsList](#classroomcoursescourseworkstudentsubmissionslist) - Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachments](#classroomcoursescourseworkstudentsubmissionsmodifyattachments) - Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [ClassroomCoursesCourseWorkStudentSubmissionsPatch](#classroomcoursescourseworkstudentsubmissionspatch) - Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [ClassroomCoursesCourseWorkStudentSubmissionsReclaim](#classroomcoursescourseworkstudentsubmissionsreclaim) - Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [ClassroomCoursesCourseWorkStudentSubmissionsReturn](#classroomcoursescourseworkstudentsubmissionsreturn) - Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [ClassroomCoursesCourseWorkStudentSubmissionsTurnIn](#classroomcoursescourseworkstudentsubmissionsturnin) - Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
* [ClassroomCoursesCourseWorkMaterialsCreate](#classroomcoursescourseworkmaterialscreate) - Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
* [ClassroomCoursesCourseWorkMaterialsDelete](#classroomcoursescourseworkmaterialsdelete) - Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
* [ClassroomCoursesCourseWorkMaterialsGet](#classroomcoursescourseworkmaterialsget) - Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.
* [ClassroomCoursesCourseWorkMaterialsList](#classroomcoursescourseworkmaterialslist) - Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [ClassroomCoursesCourseWorkMaterialsPatch](#classroomcoursescourseworkmaterialspatch) - Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist
* [ClassroomCoursesCreate](#classroomcoursescreate) - Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserCannotOwnCourse * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.
* [ClassroomCoursesDelete](#classroomcoursesdelete) - Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
* [ClassroomCoursesGet](#classroomcoursesget) - Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
* [ClassroomCoursesList](#classroomcourseslist) - Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.
* [ClassroomCoursesPatch](#classroomcoursespatch) - Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner
* [ClassroomCoursesStudentsCreate](#classroomcoursesstudentscreate) - Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.
* [ClassroomCoursesStudentsDelete](#classroomcoursesstudentsdelete) - Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
* [ClassroomCoursesStudentsGet](#classroomcoursesstudentsget) - Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
* [ClassroomCoursesStudentsList](#classroomcoursesstudentslist) - Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
* [ClassroomCoursesTeachersCreate](#classroomcoursesteacherscreate) - Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.
* [ClassroomCoursesTeachersDelete](#classroomcoursesteachersdelete) - Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.
* [ClassroomCoursesTeachersGet](#classroomcoursesteachersget) - Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.
* [ClassroomCoursesTeachersList](#classroomcoursesteacherslist) - Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
* [ClassroomCoursesTopicsCreate](#classroomcoursestopicscreate) - Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [ClassroomCoursesTopicsDelete](#classroomcoursestopicsdelete) - Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.
* [ClassroomCoursesTopicsGet](#classroomcoursestopicsget) - Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.
* [ClassroomCoursesTopicsList](#classroomcoursestopicslist) - Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
* [ClassroomCoursesTopicsPatch](#classroomcoursestopicspatch) - Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist
* [ClassroomCoursesUpdate](#classroomcoursesupdate) - Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable

## ClassroomCoursesAliasesCreate

Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesAliasesCreate(ctx, operations.ClassroomCoursesAliasesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CourseAlias: &shared.CourseAlias{
            Alias: sdk.String("magnam"),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        CourseID: "tempora",
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.ClassroomCoursesAliasesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseAlias != nil {
        // handle response
    }
}
```

## ClassroomCoursesAliasesDelete

Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesAliasesDelete(ctx, operations.ClassroomCoursesAliasesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nisi"),
        Alias: "recusandae",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        CourseID: "quis",
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.ClassroomCoursesAliasesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesAliasesList

Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesAliasesList(ctx, operations.ClassroomCoursesAliasesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        CourseID: "maiores",
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        PageSize: sdk.Int64(461479),
        PageToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.ClassroomCoursesAliasesListSecurity{
        Option1: &operations.ClassroomCoursesAliasesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCourseAliasesResponse != nil {
        // handle response
    }
}
```

## ClassroomCoursesAnnouncementsCreate

Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesAnnouncementsCreate(ctx, operations.ClassroomCoursesAnnouncementsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Announcement: &shared.Announcement{
            AlternateLink: sdk.String("officia"),
            AssigneeMode: shared.AnnouncementAssigneeModeEnumAllStudents.ToPointer(),
            CourseID: sdk.String("fugit"),
            CreationTime: sdk.String("deleniti"),
            CreatorUserID: sdk.String("hic"),
            ID: sdk.String("c816742c-b739-4205-9293-96fea7596eb1"),
            IndividualStudentsOptions: &shared.IndividualStudentsOptions{
                StudentIds: []string{
                    "reiciendis",
                },
            },
            Materials: []shared.Material{
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("mollitia"),
                            ID: sdk.String("a2352c59-5590-47af-b1a3-a2fa94677392"),
                            ThumbnailURL: sdk.String("quis"),
                            Title: sdk.String("Mr."),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumEdit.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("animi"),
                        ResponseURL: sdk.String("enim"),
                        ThumbnailURL: sdk.String("odit"),
                        Title: sdk.String("Miss"),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("sequi"),
                        Title: sdk.String("Dr."),
                        URL: sdk.String("ipsam"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("id"),
                        ID: sdk.String("d019da1f-fe78-4f09-bb00-74f15471b5e6"),
                        ThumbnailURL: sdk.String("repudiandae"),
                        Title: sdk.String("Mr."),
                    },
                },
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("ipsum"),
                            ID: sdk.String("b99d488e-1e91-4e45-8ad2-abd44269802d"),
                            ThumbnailURL: sdk.String("ipsam"),
                            Title: sdk.String("Mr."),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumUnknownShareMode.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("dolorum"),
                        ResponseURL: sdk.String("excepturi"),
                        ThumbnailURL: sdk.String("tempora"),
                        Title: sdk.String("Miss"),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("tempore"),
                        Title: sdk.String("Mrs."),
                        URL: sdk.String("delectus"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("eum"),
                        ID: sdk.String("3c969e9a-3efa-477d-bb14-cd66ae395efb"),
                        ThumbnailURL: sdk.String("provident"),
                        Title: sdk.String("Miss"),
                    },
                },
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("id"),
                            ID: sdk.String("88f3a669-9707-44ba-8469-b6e214195989"),
                            ThumbnailURL: sdk.String("accusantium"),
                            Title: sdk.String("Miss"),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumStudentCopy.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("mollitia"),
                        ResponseURL: sdk.String("ad"),
                        ThumbnailURL: sdk.String("eum"),
                        Title: sdk.String("Mrs."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("necessitatibus"),
                        Title: sdk.String("Mr."),
                        URL: sdk.String("nemo"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("quasi"),
                        ID: sdk.String("6fe4c8b7-11e5-4b7f-92ed-028921cddc69"),
                        ThumbnailURL: sdk.String("odit"),
                        Title: sdk.String("Ms."),
                    },
                },
            },
            ScheduledTime: sdk.String("accusantium"),
            State: shared.AnnouncementStateEnumAnnouncementStateUnspecified.ToPointer(),
            Text: sdk.String("maiores"),
            UpdateTime: sdk.String("quidem"),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        CourseID: "nam",
        Fields: sdk.String("eaque"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.ClassroomCoursesAnnouncementsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Announcement != nil {
        // handle response
    }
}
```

## ClassroomCoursesAnnouncementsDelete

Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesAnnouncementsDelete(ctx, operations.ClassroomCoursesAnnouncementsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        CourseID: "hic",
        Fields: sdk.String("libero"),
        ID: "b2587053-202c-473d-9fe9-b90c28909b3f",
        Key: sdk.String("earum"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.ClassroomCoursesAnnouncementsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesAnnouncementsGet

Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesAnnouncementsGet(ctx, operations.ClassroomCoursesAnnouncementsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        CourseID: "delectus",
        Fields: sdk.String("quaerat"),
        ID: "8633323f-9b77-4f3a-8100-674ebf69280d",
        Key: sdk.String("ab"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.ClassroomCoursesAnnouncementsGetSecurity{
        Option1: &operations.ClassroomCoursesAnnouncementsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Announcement != nil {
        // handle response
    }
}
```

## ClassroomCoursesAnnouncementsList

Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesAnnouncementsList(ctx, operations.ClassroomCoursesAnnouncementsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AnnouncementStates: []ClassroomCoursesAnnouncementsListAnnouncementStatesEnum{
            operations.ClassroomCoursesAnnouncementsListAnnouncementStatesEnumDraft,
            operations.ClassroomCoursesAnnouncementsListAnnouncementStatesEnumDeleted,
            operations.ClassroomCoursesAnnouncementsListAnnouncementStatesEnumPublished,
            operations.ClassroomCoursesAnnouncementsListAnnouncementStatesEnumAnnouncementStateUnspecified,
        },
        Callback: sdk.String("voluptate"),
        CourseID: "id",
        Fields: sdk.String("saepe"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("aspernatur"),
        OrderBy: sdk.String("perferendis"),
        PageSize: sdk.Int64(229219),
        PageToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.ClassroomCoursesAnnouncementsListSecurity{
        Option1: &operations.ClassroomCoursesAnnouncementsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnnouncementsResponse != nil {
        // handle response
    }
}
```

## ClassroomCoursesAnnouncementsModifyAssignees

Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesAnnouncementsModifyAssignees(ctx, operations.ClassroomCoursesAnnouncementsModifyAssigneesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ModifyAnnouncementAssigneesRequest: &shared.ModifyAnnouncementAssigneesRequest{
            AssigneeMode: shared.ModifyAnnouncementAssigneesRequestAssigneeModeEnumAllStudents.ToPointer(),
            ModifyIndividualStudentsOptions: &shared.ModifyIndividualStudentsOptions{
                AddStudentIds: []string{
                    "minima",
                    "repellendus",
                    "totam",
                },
                RemoveStudentIds: []string{
                    "alias",
                    "at",
                    "quaerat",
                },
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        CourseID: "officiis",
        Fields: sdk.String("qui"),
        ID: "af7a73cf-3be4-453f-870b-326b5a73429c",
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("totam"),
    }, operations.ClassroomCoursesAnnouncementsModifyAssigneesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Announcement != nil {
        // handle response
    }
}
```

## ClassroomCoursesAnnouncementsPatch

Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesAnnouncementsPatch(ctx, operations.ClassroomCoursesAnnouncementsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Announcement: &shared.Announcement{
            AlternateLink: sdk.String("aspernatur"),
            AssigneeMode: shared.AnnouncementAssigneeModeEnumAssigneeModeUnspecified.ToPointer(),
            CourseID: sdk.String("distinctio"),
            CreationTime: sdk.String("facilis"),
            CreatorUserID: sdk.String("aliquid"),
            ID: sdk.String("79d23227-15bf-40cb-b1e3-1b8b90f3443a"),
            IndividualStudentsOptions: &shared.IndividualStudentsOptions{
                StudentIds: []string{
                    "quae",
                },
            },
            Materials: []shared.Material{
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("quas"),
                            ID: sdk.String("e0adcf4b-9218-479f-8e95-3f73ef7fbc7a"),
                            ThumbnailURL: sdk.String("facilis"),
                            Title: sdk.String("Dr."),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumView.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("dolore"),
                        ResponseURL: sdk.String("quibusdam"),
                        ThumbnailURL: sdk.String("illum"),
                        Title: sdk.String("Mr."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("natus"),
                        Title: sdk.String("Miss"),
                        URL: sdk.String("aut"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("voluptatibus"),
                        ID: sdk.String("5d2cff7c-70a4-4562-ad43-6813f16d9f5f"),
                        ThumbnailURL: sdk.String("quisquam"),
                        Title: sdk.String("Dr."),
                    },
                },
            },
            ScheduledTime: sdk.String("ea"),
            State: shared.AnnouncementStateEnumDeleted.ToPointer(),
            Text: sdk.String("corporis"),
            UpdateTime: sdk.String("veniam"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        CourseID: "ea",
        Fields: sdk.String("quo"),
        ID: "3e250fb0-08c4-42e1-81aa-c366c8dd6b14",
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UpdateMask: sdk.String("ipsa"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.ClassroomCoursesAnnouncementsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Announcement != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkCreate

Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkCreate(ctx, operations.ClassroomCoursesCourseWorkCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CourseWork: &shared.CourseWork{
            AlternateLink: sdk.String("eius"),
            AssigneeMode: shared.CourseWorkAssigneeModeEnumAllStudents.ToPointer(),
            Assignment: &shared.Assignment{
                StudentWorkFolder: &shared.DriveFolder{
                    AlternateLink: sdk.String("esse"),
                    ID: sdk.String("8a7bd466-d28c-410a-b3cd-ca4251904e52"),
                    Title: sdk.String("Mr."),
                },
            },
            AssociatedWithDeveloper: sdk.Bool(false),
            CourseID: sdk.String("quo"),
            CreationTime: sdk.String("esse"),
            CreatorUserID: sdk.String("recusandae"),
            Description: sdk.String("aperiam"),
            DueDate: &shared.Date{
                Day: sdk.Int(715179),
                Month: sdk.Int(799796),
                Year: sdk.Int(490819),
            },
            DueTime: &shared.TimeOfDay{
                Hours: sdk.Int(76956),
                Minutes: sdk.Int(469498),
                Nanos: sdk.Int(518835),
                Seconds: sdk.Int(882710),
            },
            GradeCategory: &shared.GradeCategory{
                DefaultGradeDenominator: sdk.Int(306810),
                ID: sdk.String("796f2a70-c688-4282-aa48-2562f222e981"),
                Name: sdk.String("Ms. Olive Tillman"),
                Weight: sdk.Int(724168),
            },
            ID: sdk.String("e61e6b7b-95bc-40ab-bc20-c4f3789fd871"),
            IndividualStudentsOptions: &shared.IndividualStudentsOptions{
                StudentIds: []string{
                    "error",
                    "sint",
                    "pariatur",
                    "possimus",
                },
            },
            Materials: []shared.Material{
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("eveniet"),
                            ID: sdk.String("fd121aa6-f1e6-474b-9b04-f15756082d68"),
                            ThumbnailURL: sdk.String("itaque"),
                            Title: sdk.String("Miss"),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumUnknownShareMode.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("omnis"),
                        ResponseURL: sdk.String("tenetur"),
                        ThumbnailURL: sdk.String("quasi"),
                        Title: sdk.String("Dr."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("et"),
                        Title: sdk.String("Ms."),
                        URL: sdk.String("ipsa"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("minima"),
                        ID: sdk.String("1339d080-86a1-4840-b94c-26071f93f5f0"),
                        ThumbnailURL: sdk.String("ea"),
                        Title: sdk.String("Mrs."),
                    },
                },
            },
            MaxPoints: sdk.Float64(1629.54),
            MultipleChoiceQuestion: &shared.MultipleChoiceQuestion{
                Choices: []string{
                    "officia",
                    "maxime",
                    "dignissimos",
                    "officia",
                },
            },
            ScheduledTime: sdk.String("asperiores"),
            State: shared.CourseWorkStateEnumPublished.ToPointer(),
            SubmissionModificationMode: shared.CourseWorkSubmissionModificationModeEnumSubmissionModificationModeUnspecified.ToPointer(),
            Title: sdk.String("Mrs."),
            TopicID: sdk.String("porro"),
            UpdateTime: sdk.String("quod"),
            WorkType: shared.CourseWorkWorkTypeEnumAssignment.ToPointer(),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        CourseID: "id",
        Fields: sdk.String("suscipit"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("totam"),
    }, operations.ClassroomCoursesCourseWorkCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseWork != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkDelete

Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkDelete(ctx, operations.ClassroomCoursesCourseWorkDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        CourseID: "vel",
        Fields: sdk.String("labore"),
        ID: "dbb675fd-5e60-4b37-9ed4-f6fbee41f333",
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.ClassroomCoursesCourseWorkDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkGet

Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkGet(ctx, operations.ClassroomCoursesCourseWorkGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        CourseID: "voluptates",
        Fields: sdk.String("libero"),
        ID: "1ea42655-5ba3-4c28-b44e-d53b88f3a8d8",
        Key: sdk.String("hic"),
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.ClassroomCoursesCourseWorkGetSecurity{
        Option1: &operations.ClassroomCoursesCourseWorkGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseWork != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkList

Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkList(ctx, operations.ClassroomCoursesCourseWorkListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("asperiores"),
        CourseID: "facilis",
        CourseWorkStates: []ClassroomCoursesCourseWorkListCourseWorkStatesEnum{
            operations.ClassroomCoursesCourseWorkListCourseWorkStatesEnumDraft,
            operations.ClassroomCoursesCourseWorkListCourseWorkStatesEnumCourseWorkStateUnspecified,
        },
        Fields: sdk.String("iste"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("laborum"),
        OrderBy: sdk.String("sed"),
        PageSize: sdk.Int64(447516),
        PageToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.ClassroomCoursesCourseWorkListSecurity{
        Option1: &operations.ClassroomCoursesCourseWorkListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCourseWorkResponse != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkModifyAssignees

Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkModifyAssignees(ctx, operations.ClassroomCoursesCourseWorkModifyAssigneesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ModifyCourseWorkAssigneesRequest: &shared.ModifyCourseWorkAssigneesRequest{
            AssigneeMode: shared.ModifyCourseWorkAssigneesRequestAssigneeModeEnumAssigneeModeUnspecified.ToPointer(),
            ModifyIndividualStudentsOptions: &shared.ModifyIndividualStudentsOptions{
                AddStudentIds: []string{
                    "sapiente",
                    "debitis",
                },
                RemoveStudentIds: []string{
                    "reiciendis",
                },
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        CourseID: "incidunt",
        Fields: sdk.String("sed"),
        ID: "94e3698f-447f-4603-a8b4-45e80ca55efd",
        Key: sdk.String("magni"),
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("veniam"),
    }, operations.ClassroomCoursesCourseWorkModifyAssigneesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseWork != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkPatch

Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkPatch(ctx, operations.ClassroomCoursesCourseWorkPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CourseWork: &shared.CourseWork{
            AlternateLink: sdk.String("officiis"),
            AssigneeMode: shared.CourseWorkAssigneeModeEnumAssigneeModeUnspecified.ToPointer(),
            Assignment: &shared.Assignment{
                StudentWorkFolder: &shared.DriveFolder{
                    AlternateLink: sdk.String("laudantium"),
                    ID: sdk.String("58b6a89f-be3a-45aa-8e48-24d0ab407508"),
                    Title: sdk.String("Ms."),
                },
            },
            AssociatedWithDeveloper: sdk.Bool(false),
            CourseID: sdk.String("repudiandae"),
            CreationTime: sdk.String("corporis"),
            CreatorUserID: sdk.String("et"),
            Description: sdk.String("blanditiis"),
            DueDate: &shared.Date{
                Day: sdk.Int(405942),
                Month: sdk.Int(153627),
                Year: sdk.Int(24313),
            },
            DueTime: &shared.TimeOfDay{
                Hours: sdk.Int(425508),
                Minutes: sdk.Int(342611),
                Nanos: sdk.Int(906172),
                Seconds: sdk.Int(622231),
            },
            GradeCategory: &shared.GradeCategory{
                DefaultGradeDenominator: sdk.Int(8511),
                ID: sdk.String("4f3b1194-b8ab-4f60-ba79-f9dfe0ab7da8"),
                Name: sdk.String("Floyd Barrows"),
                Weight: sdk.Int(97243),
            },
            ID: sdk.String("87f86bc1-73d6-489e-ae95-26f8d986e881"),
            IndividualStudentsOptions: &shared.IndividualStudentsOptions{
                StudentIds: []string{
                    "dolorum",
                    "repellendus",
                    "labore",
                    "reiciendis",
                },
            },
            Materials: []shared.Material{
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("repudiandae"),
                            ID: sdk.String("1012563f-94e2-49e9-b3e9-22a57a15be3e"),
                            ThumbnailURL: sdk.String("doloremque"),
                            Title: sdk.String("Ms."),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumUnknownShareMode.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("totam"),
                        ResponseURL: sdk.String("quae"),
                        ThumbnailURL: sdk.String("molestiae"),
                        Title: sdk.String("Dr."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("qui"),
                        Title: sdk.String("Miss"),
                        URL: sdk.String("iure"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("necessitatibus"),
                        ID: sdk.String("3ab8845f-0597-4a60-bf2a-54a31e94764a"),
                        ThumbnailURL: sdk.String("adipisci"),
                        Title: sdk.String("Dr."),
                    },
                },
            },
            MaxPoints: sdk.Float64(5145.13),
            MultipleChoiceQuestion: &shared.MultipleChoiceQuestion{
                Choices: []string{
                    "nemo",
                    "recusandae",
                },
            },
            ScheduledTime: sdk.String("esse"),
            State: shared.CourseWorkStateEnumDraft.ToPointer(),
            SubmissionModificationMode: shared.CourseWorkSubmissionModificationModeEnumModifiableUntilTurnedIn.ToPointer(),
            Title: sdk.String("Ms."),
            TopicID: sdk.String("reiciendis"),
            UpdateTime: sdk.String("provident"),
            WorkType: shared.CourseWorkWorkTypeEnumCourseWorkTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("animi"),
        CourseID: "nostrum",
        Fields: sdk.String("mollitia"),
        ID: "9da660ff-57bf-4aad-8f9e-fc1b4512c103",
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UpdateMask: sdk.String("rem"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.ClassroomCoursesCourseWorkPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseWork != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkStudentSubmissionsGet

Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkStudentSubmissionsGet(ctx, operations.ClassroomCoursesCourseWorkStudentSubmissionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        CourseID: "minima",
        CourseWorkID: "beatae",
        Fields: sdk.String("cupiditate"),
        ID: "9ebfd0e9-fe6c-4632-8a3a-ed0117996312",
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity{
        Option1: &operations.ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentSubmission != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkStudentSubmissionsList

Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkStudentSubmissionsList(ctx, operations.ClassroomCoursesCourseWorkStudentSubmissionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        CourseID: "esse",
        CourseWorkID: "praesentium",
        Fields: sdk.String("maiores"),
        Key: sdk.String("reiciendis"),
        Late: operations.ClassroomCoursesCourseWorkStudentSubmissionsListLateEnumLateOnly.ToPointer(),
        OauthToken: sdk.String("architecto"),
        PageSize: sdk.Int64(857125),
        PageToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        States: []ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum{
            operations.ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnumNew,
            operations.ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnumCreated,
        },
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("consectetur"),
        UserID: sdk.String("aliquid"),
    }, operations.ClassroomCoursesCourseWorkStudentSubmissionsListSecurity{
        Option1: &operations.ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStudentSubmissionsResponse != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachments

Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachments(ctx, operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ModifyAttachmentsRequest: &shared.ModifyAttachmentsRequest{
            AddAttachments: []shared.Attachment{
                shared.Attachment{
                    DriveFile: &shared.DriveFile{
                        AlternateLink: sdk.String("sunt"),
                        ID: sdk.String("5db6a660-659a-41ad-aaab-5851d6c645b0"),
                        ThumbnailURL: sdk.String("molestias"),
                        Title: sdk.String("Miss"),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("aliquid"),
                        ResponseURL: sdk.String("beatae"),
                        ThumbnailURL: sdk.String("voluptatum"),
                        Title: sdk.String("Miss"),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("veritatis"),
                        Title: sdk.String("Miss"),
                        URL: sdk.String("est"),
                    },
                    YouTubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("culpa"),
                        ID: sdk.String("0fe1ade0-08e6-4f8c-9f35-0d8cdb5a3418"),
                        ThumbnailURL: sdk.String("veritatis"),
                        Title: sdk.String("Mrs."),
                    },
                },
                shared.Attachment{
                    DriveFile: &shared.DriveFile{
                        AlternateLink: sdk.String("dolor"),
                        ID: sdk.String("01042181-3d52-408e-8e7e-253b668451c6"),
                        ThumbnailURL: sdk.String("nobis"),
                        Title: sdk.String("Mrs."),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("recusandae"),
                        ResponseURL: sdk.String("consequuntur"),
                        ThumbnailURL: sdk.String("voluptatem"),
                        Title: sdk.String("Mrs."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("necessitatibus"),
                        Title: sdk.String("Mr."),
                        URL: sdk.String("nisi"),
                    },
                    YouTubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("at"),
                        ID: sdk.String("eab3fec9-578a-4645-8427-3a8418d16230"),
                        ThumbnailURL: sdk.String("cupiditate"),
                        Title: sdk.String("Dr."),
                    },
                },
                shared.Attachment{
                    DriveFile: &shared.DriveFile{
                        AlternateLink: sdk.String("soluta"),
                        ID: sdk.String("0929921a-efb9-4f58-84d8-6e68e4be0560"),
                        ThumbnailURL: sdk.String("quasi"),
                        Title: sdk.String("Mrs."),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("maiores"),
                        ResponseURL: sdk.String("enim"),
                        ThumbnailURL: sdk.String("sint"),
                        Title: sdk.String("Dr."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("deserunt"),
                        Title: sdk.String("Ms."),
                        URL: sdk.String("nemo"),
                    },
                    YouTubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("reprehenderit"),
                        ID: sdk.String("a59ecfef-66ef-41ca-a338-3c2beb477373"),
                        ThumbnailURL: sdk.String("quo"),
                        Title: sdk.String("Ms."),
                    },
                },
            },
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odit"),
        CourseID: "voluptatibus",
        CourseWorkID: "vel",
        Fields: sdk.String("magnam"),
        ID: "d1db1f2c-4310-4661-a963-49e1cf9e06e3",
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("sit"),
    }, operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity{
        Option1: &operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentSubmission != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkStudentSubmissionsPatch

Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkStudentSubmissionsPatch(ctx, operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        StudentSubmission: &shared.StudentSubmission{
            AlternateLink: sdk.String("consequatur"),
            AssignedGrade: sdk.Float64(6397.05),
            AssignmentSubmission: &shared.AssignmentSubmission{
                Attachments: []shared.Attachment{
                    shared.Attachment{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("ea"),
                            ID: sdk.String("b6bc9b8f-759e-4ac5-9a97-41d311352965"),
                            ThumbnailURL: sdk.String("soluta"),
                            Title: sdk.String("Miss"),
                        },
                        Form: &shared.Form{
                            FormURL: sdk.String("rem"),
                            ResponseURL: sdk.String("dolorum"),
                            ThumbnailURL: sdk.String("odio"),
                            Title: sdk.String("Mr."),
                        },
                        Link: &shared.Link{
                            ThumbnailURL: sdk.String("alias"),
                            Title: sdk.String("Mr."),
                            URL: sdk.String("vel"),
                        },
                        YouTubeVideo: &shared.YouTubeVideo{
                            AlternateLink: sdk.String("quae"),
                            ID: sdk.String("1435e139-dbc2-4259-b1ab-da8c070e1084"),
                            ThumbnailURL: sdk.String("eligendi"),
                            Title: sdk.String("Miss"),
                        },
                    },
                    shared.Attachment{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("voluptatem"),
                            ID: sdk.String("672d1ad8-79ee-4b96-a5b8-5efbd02bae0b"),
                            ThumbnailURL: sdk.String("officiis"),
                            Title: sdk.String("Mr."),
                        },
                        Form: &shared.Form{
                            FormURL: sdk.String("quibusdam"),
                            ResponseURL: sdk.String("odio"),
                            ThumbnailURL: sdk.String("praesentium"),
                            Title: sdk.String("Mr."),
                        },
                        Link: &shared.Link{
                            ThumbnailURL: sdk.String("explicabo"),
                            Title: sdk.String("Mrs."),
                            URL: sdk.String("error"),
                        },
                        YouTubeVideo: &shared.YouTubeVideo{
                            AlternateLink: sdk.String("earum"),
                            ID: sdk.String("3ea4b519-7f92-4443-9a7c-e52b895c537c"),
                            ThumbnailURL: sdk.String("eum"),
                            Title: sdk.String("Mrs."),
                        },
                    },
                    shared.Attachment{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("corporis"),
                            ID: sdk.String("4efb0b34-896c-43ca-9acf-be2fd5707577"),
                            ThumbnailURL: sdk.String("excepturi"),
                            Title: sdk.String("Mr."),
                        },
                        Form: &shared.Form{
                            FormURL: sdk.String("error"),
                            ResponseURL: sdk.String("veritatis"),
                            ThumbnailURL: sdk.String("ducimus"),
                            Title: sdk.String("Ms."),
                        },
                        Link: &shared.Link{
                            ThumbnailURL: sdk.String("pariatur"),
                            Title: sdk.String("Dr."),
                            URL: sdk.String("similique"),
                        },
                        YouTubeVideo: &shared.YouTubeVideo{
                            AlternateLink: sdk.String("optio"),
                            ID: sdk.String("646ecb57-3409-4e3e-b1e5-a2b12eb07f11"),
                            ThumbnailURL: sdk.String("laboriosam"),
                            Title: sdk.String("Dr."),
                        },
                    },
                    shared.Attachment{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("libero"),
                            ID: sdk.String("99545fc9-5fa8-4897-8e18-9dbb30fcb33e"),
                            ThumbnailURL: sdk.String("deserunt"),
                            Title: sdk.String("Mr."),
                        },
                        Form: &shared.Form{
                            FormURL: sdk.String("quis"),
                            ResponseURL: sdk.String("veniam"),
                            ThumbnailURL: sdk.String("libero"),
                            Title: sdk.String("Mr."),
                        },
                        Link: &shared.Link{
                            ThumbnailURL: sdk.String("cupiditate"),
                            Title: sdk.String("Ms."),
                            URL: sdk.String("eligendi"),
                        },
                        YouTubeVideo: &shared.YouTubeVideo{
                            AlternateLink: sdk.String("possimus"),
                            ID: sdk.String("44e2f52d-82d3-4513-bb6f-48b656bcdb35"),
                            ThumbnailURL: sdk.String("voluptatibus"),
                            Title: sdk.String("Dr."),
                        },
                    },
                },
            },
            AssociatedWithDeveloper: sdk.Bool(false),
            CourseID: sdk.String("consequuntur"),
            CourseWorkID: sdk.String("debitis"),
            CourseWorkType: shared.StudentSubmissionCourseWorkTypeEnumAssignment.ToPointer(),
            CreationTime: sdk.String("rerum"),
            DraftGrade: sdk.Float64(1797.95),
            ID: sdk.String("7537a8cd-9e73-419c-977d-525f77b114ee"),
            Late: sdk.Bool(false),
            MultipleChoiceSubmission: &shared.MultipleChoiceSubmission{
                Answer: sdk.String("tempore"),
            },
            ShortAnswerSubmission: &shared.ShortAnswerSubmission{
                Answer: sdk.String("veniam"),
            },
            State: shared.StudentSubmissionStateEnumNew.ToPointer(),
            SubmissionHistory: []shared.SubmissionHistory{
                shared.SubmissionHistory{
                    GradeHistory: &shared.GradeHistory{
                        ActorUserID: sdk.String("earum"),
                        GradeChangeType: shared.GradeHistoryGradeChangeTypeEnumDraftGradePointsEarnedChange.ToPointer(),
                        GradeTimestamp: sdk.String("praesentium"),
                        MaxPoints: sdk.Float64(3670.46),
                        PointsEarned: sdk.Float64(9998.09),
                    },
                    StateHistory: &shared.StateHistory{
                        ActorUserID: sdk.String("quisquam"),
                        State: shared.StateHistoryStateEnumCreated.ToPointer(),
                        StateTimestamp: sdk.String("nihil"),
                    },
                },
                shared.SubmissionHistory{
                    GradeHistory: &shared.GradeHistory{
                        ActorUserID: sdk.String("deleniti"),
                        GradeChangeType: shared.GradeHistoryGradeChangeTypeEnumUnknownGradeChangeType.ToPointer(),
                        GradeTimestamp: sdk.String("labore"),
                        MaxPoints: sdk.Float64(8288.41),
                        PointsEarned: sdk.Float64(3041.73),
                    },
                    StateHistory: &shared.StateHistory{
                        ActorUserID: sdk.String("quisquam"),
                        State: shared.StateHistoryStateEnumReturned.ToPointer(),
                        StateTimestamp: sdk.String("laudantium"),
                    },
                },
                shared.SubmissionHistory{
                    GradeHistory: &shared.GradeHistory{
                        ActorUserID: sdk.String("repudiandae"),
                        GradeChangeType: shared.GradeHistoryGradeChangeTypeEnumUnknownGradeChangeType.ToPointer(),
                        GradeTimestamp: sdk.String("maxime"),
                        MaxPoints: sdk.Float64(1363.57),
                        PointsEarned: sdk.Float64(7239.42),
                    },
                    StateHistory: &shared.StateHistory{
                        ActorUserID: sdk.String("expedita"),
                        State: shared.StateHistoryStateEnumReturned.ToPointer(),
                        StateTimestamp: sdk.String("provident"),
                    },
                },
                shared.SubmissionHistory{
                    GradeHistory: &shared.GradeHistory{
                        ActorUserID: sdk.String("repudiandae"),
                        GradeChangeType: shared.GradeHistoryGradeChangeTypeEnumAssignedGradePointsEarnedChange.ToPointer(),
                        GradeTimestamp: sdk.String("dignissimos"),
                        MaxPoints: sdk.Float64(3609.34),
                        PointsEarned: sdk.Float64(8738.33),
                    },
                    StateHistory: &shared.StateHistory{
                        ActorUserID: sdk.String("similique"),
                        State: shared.StateHistoryStateEnumStudentEditedAfterTurnIn.ToPointer(),
                        StateTimestamp: sdk.String("iure"),
                    },
                },
            },
            UpdateTime: sdk.String("dolorem"),
            UserID: sdk.String("commodi"),
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        CourseID: "voluptatem",
        CourseWorkID: "ad",
        Fields: sdk.String("quae"),
        ID: "3d8bb311-80f7-439a-a9e0-57eb809e2810",
        Key: sdk.String("velit"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UpdateMask: sdk.String("a"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity{
        Option1: &operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentSubmission != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkStudentSubmissionsReclaim

Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkStudentSubmissionsReclaim(ctx, operations.ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "at": "labore",
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatem"),
        CourseID: "perferendis",
        CourseWorkID: "rerum",
        Fields: sdk.String("ea"),
        ID: "07f3c93c-73b9-4da3-b2ce-da7e23f22574",
        Key: sdk.String("ab"),
        OauthToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkStudentSubmissionsReturn

Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkStudentSubmissionsReturn(ctx, operations.ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "in": "exercitationem",
            "labore": "numquam",
            "repudiandae": "modi",
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        CourseID: "rem",
        CourseWorkID: "aperiam",
        Fields: sdk.String("odit"),
        ID: "857a5b40-463a-47d5-b5f1-400e764ad733",
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkStudentSubmissionsTurnIn

Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkStudentSubmissionsTurnIn(ctx, operations.ClassroomCoursesCourseWorkStudentSubmissionsTurnInRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "et": "facilis",
            "amet": "autem",
            "fuga": "alias",
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quos"),
        CourseID: "laudantium",
        CourseWorkID: "repellendus",
        Fields: sdk.String("veritatis"),
        ID: "00efada2-00ef-4042-aeb2-164cf9ab8366",
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("ducimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.ClassroomCoursesCourseWorkStudentSubmissionsTurnInSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkMaterialsCreate

Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkMaterialsCreate(ctx, operations.ClassroomCoursesCourseWorkMaterialsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CourseWorkMaterial: &shared.CourseWorkMaterial{
            AlternateLink: sdk.String("nulla"),
            AssigneeMode: shared.CourseWorkMaterialAssigneeModeEnumIndividualStudents.ToPointer(),
            CourseID: sdk.String("natus"),
            CreationTime: sdk.String("accusamus"),
            CreatorUserID: sdk.String("doloremque"),
            Description: sdk.String("nisi"),
            ID: sdk.String("bee4825c-1fc0-4e11-9c80-bff918544ec4"),
            IndividualStudentsOptions: &shared.IndividualStudentsOptions{
                StudentIds: []string{
                    "assumenda",
                },
            },
            Materials: []shared.Material{
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("doloribus"),
                            ID: sdk.String("cce8f197-7773-4e63-962a-7b408f05e3d4"),
                            ThumbnailURL: sdk.String("quos"),
                            Title: sdk.String("Dr."),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumStudentCopy.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("est"),
                        ResponseURL: sdk.String("delectus"),
                        ThumbnailURL: sdk.String("velit"),
                        Title: sdk.String("Mr."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("nesciunt"),
                        Title: sdk.String("Miss"),
                        URL: sdk.String("illo"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("repellat"),
                        ID: sdk.String("5fd94259-c0b3-46f2-9ea9-44f3b756c11f"),
                        ThumbnailURL: sdk.String("nisi"),
                        Title: sdk.String("Miss"),
                    },
                },
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("dolor"),
                            ID: sdk.String("7a512624-3835-4bbc-85a2-3a45cefc5fde"),
                            ThumbnailURL: sdk.String("architecto"),
                            Title: sdk.String("Mr."),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumEdit.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("ipsa"),
                        ResponseURL: sdk.String("nobis"),
                        ThumbnailURL: sdk.String("necessitatibus"),
                        Title: sdk.String("Mr."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("dicta"),
                        Title: sdk.String("Ms."),
                        URL: sdk.String("perspiciatis"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("debitis"),
                        ID: sdk.String("510019c6-dc5e-4347-a279-9bfbbe6949fb"),
                        ThumbnailURL: sdk.String("aspernatur"),
                        Title: sdk.String("Miss"),
                    },
                },
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("nam"),
                            ID: sdk.String("4ecae6c3-d5db-43ad-abd5-daea4c506a8a"),
                            ThumbnailURL: sdk.String("est"),
                            Title: sdk.String("Ms."),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumView.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("quo"),
                        ResponseURL: sdk.String("perferendis"),
                        ThumbnailURL: sdk.String("fugit"),
                        Title: sdk.String("Mrs."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("magnam"),
                        Title: sdk.String("Mrs."),
                        URL: sdk.String("eligendi"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("hic"),
                        ID: sdk.String("5e9d9a45-78ad-4c1a-8600-dec001ac802e"),
                        ThumbnailURL: sdk.String("sed"),
                        Title: sdk.String("Dr."),
                    },
                },
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("impedit"),
                            ID: sdk.String("09ff8f0f-816f-4f34-b7c1-3e902c14125b"),
                            ThumbnailURL: sdk.String("alias"),
                            Title: sdk.String("Miss"),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumView.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("accusantium"),
                        ResponseURL: sdk.String("id"),
                        ThumbnailURL: sdk.String("laboriosam"),
                        Title: sdk.String("Ms."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("quas"),
                        Title: sdk.String("Mr."),
                        URL: sdk.String("ullam"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("quae"),
                        ID: sdk.String("a472af92-3c59-449f-83f3-50cf876ffb90"),
                        ThumbnailURL: sdk.String("dicta"),
                        Title: sdk.String("Miss"),
                    },
                },
            },
            ScheduledTime: sdk.String("commodi"),
            State: shared.CourseWorkMaterialStateEnumDeleted.ToPointer(),
            Title: sdk.String("Miss"),
            TopicID: sdk.String("tempore"),
            UpdateTime: sdk.String("quidem"),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugit"),
        CourseID: "eius",
        Fields: sdk.String("sequi"),
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("sint"),
    }, operations.ClassroomCoursesCourseWorkMaterialsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseWorkMaterial != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkMaterialsDelete

Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkMaterialsDelete(ctx, operations.ClassroomCoursesCourseWorkMaterialsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        CourseID: "itaque",
        Fields: sdk.String("nulla"),
        ID: "a53e5ae6-e0ac-4184-82b9-c247c88373a4",
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.ClassroomCoursesCourseWorkMaterialsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkMaterialsGet

Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkMaterialsGet(ctx, operations.ClassroomCoursesCourseWorkMaterialsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odit"),
        CourseID: "earum",
        Fields: sdk.String("veniam"),
        ID: "5055756f-5d56-4d0b-90af-2dfe13db4f62",
        Key: sdk.String("minus"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("earum"),
    }, operations.ClassroomCoursesCourseWorkMaterialsGetSecurity{
        Option1: &operations.ClassroomCoursesCourseWorkMaterialsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseWorkMaterial != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkMaterialsList

Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkMaterialsList(ctx, operations.ClassroomCoursesCourseWorkMaterialsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        CourseID: "mollitia",
        CourseWorkMaterialStates: []ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum{
            operations.ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnumDraft,
            operations.ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnumDeleted,
            operations.ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnumCourseworkMaterialStateUnspecified,
            operations.ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnumDraft,
        },
        Fields: sdk.String("corrupti"),
        Key: sdk.String("eaque"),
        MaterialDriveID: sdk.String("deserunt"),
        MaterialLink: sdk.String("aliquid"),
        OauthToken: sdk.String("excepturi"),
        OrderBy: sdk.String("magni"),
        PageSize: sdk.Int64(273677),
        PageToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("sed"),
    }, operations.ClassroomCoursesCourseWorkMaterialsListSecurity{
        Option1: &operations.ClassroomCoursesCourseWorkMaterialsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCourseWorkMaterialResponse != nil {
        // handle response
    }
}
```

## ClassroomCoursesCourseWorkMaterialsPatch

Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCourseWorkMaterialsPatch(ctx, operations.ClassroomCoursesCourseWorkMaterialsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CourseWorkMaterial: &shared.CourseWorkMaterial{
            AlternateLink: sdk.String("optio"),
            AssigneeMode: shared.CourseWorkMaterialAssigneeModeEnumIndividualStudents.ToPointer(),
            CourseID: sdk.String("minus"),
            CreationTime: sdk.String("quo"),
            CreatorUserID: sdk.String("quos"),
            Description: sdk.String("asperiores"),
            ID: sdk.String("895010f5-dd3d-46fa-9804-e54c82f168a3"),
            IndividualStudentsOptions: &shared.IndividualStudentsOptions{
                StudentIds: []string{
                    "consectetur",
                    "cumque",
                },
            },
            Materials: []shared.Material{
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("voluptatum"),
                            ID: sdk.String("73e48438-0b1f-46b8-8a27-5a60a04c495c"),
                            ThumbnailURL: sdk.String("placeat"),
                            Title: sdk.String("Mrs."),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumEdit.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("unde"),
                        ResponseURL: sdk.String("illo"),
                        ThumbnailURL: sdk.String("nihil"),
                        Title: sdk.String("Mr."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("libero"),
                        Title: sdk.String("Mrs."),
                        URL: sdk.String("quasi"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("cumque"),
                        ID: sdk.String("1bdb1cf4-b888-4ebd-bc4c-cca99bc7fc0b"),
                        ThumbnailURL: sdk.String("fugit"),
                        Title: sdk.String("Dr."),
                    },
                },
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("eligendi"),
                            ID: sdk.String("e10873e4-2b00-46d6-b887-8ba8581a5820"),
                            ThumbnailURL: sdk.String("quas"),
                            Title: sdk.String("Dr."),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumView.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("labore"),
                        ResponseURL: sdk.String("sapiente"),
                        ThumbnailURL: sdk.String("saepe"),
                        Title: sdk.String("Dr."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("officia"),
                        Title: sdk.String("Miss"),
                        URL: sdk.String("cumque"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("natus"),
                        ID: sdk.String("5f2eac55-65d3-407c-bee8-1206e2813fa4"),
                        ThumbnailURL: sdk.String("deserunt"),
                        Title: sdk.String("Mrs."),
                    },
                },
                shared.Material{
                    DriveFile: &shared.SharedDriveFile{
                        DriveFile: &shared.DriveFile{
                            AlternateLink: sdk.String("sunt"),
                            ID: sdk.String("c480d3f2-132a-4f03-902d-514f4cc6f18b"),
                            ThumbnailURL: sdk.String("hic"),
                            Title: sdk.String("Ms."),
                        },
                        ShareMode: shared.SharedDriveFileShareModeEnumView.ToPointer(),
                    },
                    Form: &shared.Form{
                        FormURL: sdk.String("sed"),
                        ResponseURL: sdk.String("beatae"),
                        ThumbnailURL: sdk.String("similique"),
                        Title: sdk.String("Ms."),
                    },
                    Link: &shared.Link{
                        ThumbnailURL: sdk.String("animi"),
                        Title: sdk.String("Mrs."),
                        URL: sdk.String("tenetur"),
                    },
                    YoutubeVideo: &shared.YouTubeVideo{
                        AlternateLink: sdk.String("dignissimos"),
                        ID: sdk.String("7a87ee3e-4be7-452c-a5b3-4418e3bb91c8"),
                        ThumbnailURL: sdk.String("temporibus"),
                        Title: sdk.String("Ms."),
                    },
                },
            },
            ScheduledTime: sdk.String("iusto"),
            State: shared.CourseWorkMaterialStateEnumPublished.ToPointer(),
            Title: sdk.String("Dr."),
            TopicID: sdk.String("aperiam"),
            UpdateTime: sdk.String("voluptates"),
        },
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        CourseID: "omnis",
        Fields: sdk.String("illum"),
        ID: "8f84f144-f3e0-47ed-8c4a-a5f3cabd905a",
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UpdateMask: sdk.String("necessitatibus"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("ad"),
    }, operations.ClassroomCoursesCourseWorkMaterialsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseWorkMaterial != nil {
        // handle response
    }
}
```

## ClassroomCoursesCreate

Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserCannotOwnCourse * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesCreate(ctx, operations.ClassroomCoursesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Course: &shared.Course{
            AlternateLink: sdk.String("molestiae"),
            CalendarID: sdk.String("quia"),
            CourseGroupEmail: sdk.String("laudantium"),
            CourseMaterialSets: []shared.CourseMaterialSet{
                shared.CourseMaterialSet{
                    Materials: []shared.CourseMaterial{
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("iusto"),
                                ID: sdk.String("b2d30947-0bf7-4a4f-a87c-f535a6fae54e"),
                                ThumbnailURL: sdk.String("distinctio"),
                                Title: sdk.String("Dr."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("laboriosam"),
                                ResponseURL: sdk.String("voluptatem"),
                                ThumbnailURL: sdk.String("optio"),
                                Title: sdk.String("Mr."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("sunt"),
                                Title: sdk.String("Mr."),
                                URL: sdk.String("voluptatibus"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("doloremque"),
                                ID: sdk.String("23b75d23-67fe-41a0-8c8d-f79f0a396d90"),
                                ThumbnailURL: sdk.String("impedit"),
                                Title: sdk.String("Mr."),
                            },
                        },
                    },
                    Title: sdk.String("Ms."),
                },
            },
            CourseState: shared.CourseCourseStateEnumActive.ToPointer(),
            CreationTime: sdk.String("expedita"),
            Description: sdk.String("in"),
            DescriptionHeading: sdk.String("quisquam"),
            EnrollmentCode: sdk.String("sunt"),
            GradebookSettings: &shared.GradebookSettings{
                CalculationType: shared.GradebookSettingsCalculationTypeEnumCalculationTypeUnspecified.ToPointer(),
                DisplaySetting: shared.GradebookSettingsDisplaySettingEnumShowTeachersOnly.ToPointer(),
                GradeCategories: []shared.GradeCategory{
                    shared.GradeCategory{
                        DefaultGradeDenominator: sdk.Int(715622),
                        ID: sdk.String("ace188b1-c4ee-42c8-86ce-611feeb1c7cb"),
                        Name: sdk.String("Felipe Homenick"),
                        Weight: sdk.Int(799866),
                    },
                    shared.GradeCategory{
                        DefaultGradeDenominator: sdk.Int(469588),
                        ID: sdk.String("4378ba25-3177-447d-8915-ad2caf5dd672"),
                        Name: sdk.String("Dr. Mona Ruecker"),
                        Weight: sdk.Int(633643),
                    },
                    shared.GradeCategory{
                        DefaultGradeDenominator: sdk.Int(919738),
                        ID: sdk.String("2f3a6b70-0878-4756-943f-5a6c98b55554"),
                        Name: sdk.String("Naomi Bauch"),
                        Weight: sdk.Int(39202),
                    },
                    shared.GradeCategory{
                        DefaultGradeDenominator: sdk.Int(740245),
                        ID: sdk.String("cacc6cbd-6b5f-43ec-9093-04f926bad255"),
                        Name: sdk.String("Jennie Boyle"),
                        Weight: sdk.Int(269600),
                    },
                },
            },
            GuardiansEnabled: sdk.Bool(false),
            ID: sdk.String("74b0ed20-e562-448f-bf63-9a910abdcab6"),
            Name: sdk.String("Laurie Kling"),
            OwnerID: sdk.String("provident"),
            Room: sdk.String("laboriosam"),
            Section: sdk.String("accusamus"),
            TeacherFolder: &shared.DriveFolder{
                AlternateLink: sdk.String("ab"),
                ID: sdk.String("ec00221b-335d-489a-8b3e-cfda8d0c549e"),
                Title: sdk.String("Dr."),
            },
            TeacherGroupEmail: sdk.String("doloremque"),
            UpdateTime: sdk.String("ipsum"),
        },
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.ClassroomCoursesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Course != nil {
        // handle response
    }
}
```

## ClassroomCoursesDelete

Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesDelete(ctx, operations.ClassroomCoursesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("a"),
        ID: "20688f77-c1ff-4c71-9ca1-63f2a3c80a97",
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("non"),
    }, operations.ClassroomCoursesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesGet

Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesGet(ctx, operations.ClassroomCoursesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("molestias"),
        ID: "57a9e618-76c6-4ab2-9d29-dfc94d6fecd7",
        Key: sdk.String("iste"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("aperiam"),
    }, operations.ClassroomCoursesGetSecurity{
        Option1: &operations.ClassroomCoursesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Course != nil {
        // handle response
    }
}
```

## ClassroomCoursesList

Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesList(ctx, operations.ClassroomCoursesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        CourseStates: []ClassroomCoursesListCourseStatesEnum{
            operations.ClassroomCoursesListCourseStatesEnumDeclined,
            operations.ClassroomCoursesListCourseStatesEnumCourseStateUnspecified,
        },
        Fields: sdk.String("fugiat"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("voluptatem"),
        PageSize: sdk.Int64(4747),
        PageToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        StudentID: sdk.String("quis"),
        TeacherID: sdk.String("velit"),
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("quas"),
    }, operations.ClassroomCoursesListSecurity{
        Option1: &operations.ClassroomCoursesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCoursesResponse != nil {
        // handle response
    }
}
```

## ClassroomCoursesPatch

Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesPatch(ctx, operations.ClassroomCoursesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Course: &shared.Course{
            AlternateLink: sdk.String("recusandae"),
            CalendarID: sdk.String("cumque"),
            CourseGroupEmail: sdk.String("doloremque"),
            CourseMaterialSets: []shared.CourseMaterialSet{
                shared.CourseMaterialSet{
                    Materials: []shared.CourseMaterial{
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("maiores"),
                                ID: sdk.String("a21e9152-cb31-4191-a7b8-e3c8db03408d"),
                                ThumbnailURL: sdk.String("commodi"),
                                Title: sdk.String("Dr."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("consectetur"),
                                ResponseURL: sdk.String("voluptas"),
                                ThumbnailURL: sdk.String("quaerat"),
                                Title: sdk.String("Dr."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("tenetur"),
                                Title: sdk.String("Dr."),
                                URL: sdk.String("dolore"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("enim"),
                                ID: sdk.String("5906d126-3d48-4e93-9c2c-9e81f30be3e4"),
                                ThumbnailURL: sdk.String("adipisci"),
                                Title: sdk.String("Mr."),
                            },
                        },
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("aperiam"),
                                ID: sdk.String("2d721657-6506-4641-870d-9d21f9ad030c"),
                                ThumbnailURL: sdk.String("tempora"),
                                Title: sdk.String("Dr."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("cumque"),
                                ResponseURL: sdk.String("maxime"),
                                ThumbnailURL: sdk.String("et"),
                                Title: sdk.String("Mr."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("id"),
                                Title: sdk.String("Mr."),
                                URL: sdk.String("quos"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("ratione"),
                                ID: sdk.String("6429068b-8502-4a55-a7f7-3bc845e320a3"),
                                ThumbnailURL: sdk.String("veritatis"),
                                Title: sdk.String("Miss"),
                            },
                        },
                    },
                    Title: sdk.String("Dr."),
                },
                shared.CourseMaterialSet{
                    Materials: []shared.CourseMaterial{
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("rerum"),
                                ID: sdk.String("adf947c9-a867-4bc4-a426-665816ddca8e"),
                                ThumbnailURL: sdk.String("maiores"),
                                Title: sdk.String("Mrs."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("illo"),
                                ResponseURL: sdk.String("doloribus"),
                                ThumbnailURL: sdk.String("cumque"),
                                Title: sdk.String("Miss"),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("modi"),
                                Title: sdk.String("Miss"),
                                URL: sdk.String("ipsam"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("occaecati"),
                                ID: sdk.String("3ec12cda-ad0e-4c7a-bedb-d80df448a47f"),
                                ThumbnailURL: sdk.String("iste"),
                                Title: sdk.String("Mrs."),
                            },
                        },
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("occaecati"),
                                ID: sdk.String("0c588809-83da-4bf9-af3f-fdd9f7f079af"),
                                ThumbnailURL: sdk.String("modi"),
                                Title: sdk.String("Dr."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("neque"),
                                ResponseURL: sdk.String("quis"),
                                ThumbnailURL: sdk.String("in"),
                                Title: sdk.String("Mr."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("non"),
                                Title: sdk.String("Miss"),
                                URL: sdk.String("fugiat"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("soluta"),
                                ID: sdk.String("0f4d2811-87d5-4684-8ede-d85a9065e628"),
                                ThumbnailURL: sdk.String("quidem"),
                                Title: sdk.String("Dr."),
                            },
                        },
                    },
                    Title: sdk.String("Dr."),
                },
                shared.CourseMaterialSet{
                    Materials: []shared.CourseMaterial{
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("dolores"),
                                ID: sdk.String("032b6c87-9923-4b7e-9358-4f7ae12c6891"),
                                ThumbnailURL: sdk.String("tenetur"),
                                Title: sdk.String("Ms."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("aspernatur"),
                                ResponseURL: sdk.String("eligendi"),
                                ThumbnailURL: sdk.String("repudiandae"),
                                Title: sdk.String("Mr."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("inventore"),
                                Title: sdk.String("Mrs."),
                                URL: sdk.String("iusto"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("inventore"),
                                ID: sdk.String("72305377-dcfa-489d-b975-e356686092e9"),
                                ThumbnailURL: sdk.String("cumque"),
                                Title: sdk.String("Mrs."),
                            },
                        },
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("repellendus"),
                                ID: sdk.String("dc5f111d-ea10-426d-941a-4d190feb2178"),
                                ThumbnailURL: sdk.String("ipsa"),
                                Title: sdk.String("Miss"),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("placeat"),
                                ResponseURL: sdk.String("quod"),
                                ThumbnailURL: sdk.String("eligendi"),
                                Title: sdk.String("Mr."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("possimus"),
                                Title: sdk.String("Miss"),
                                URL: sdk.String("distinctio"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("assumenda"),
                                ID: sdk.String("db484708-fb4e-4391-a6bc-158c4c4e5459"),
                                ThumbnailURL: sdk.String("occaecati"),
                                Title: sdk.String("Dr."),
                            },
                        },
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("fuga"),
                                ID: sdk.String("342260e9-b200-4ce7-8a1b-d8fb7a0a116c"),
                                ThumbnailURL: sdk.String("officiis"),
                                Title: sdk.String("Ms."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("fugit"),
                                ResponseURL: sdk.String("ratione"),
                                ThumbnailURL: sdk.String("possimus"),
                                Title: sdk.String("Mrs."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("aut"),
                                Title: sdk.String("Miss"),
                                URL: sdk.String("esse"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("delectus"),
                                ID: sdk.String("a30e9af7-25b2-4912-a030-d83f5aeb7799"),
                                ThumbnailURL: sdk.String("assumenda"),
                                Title: sdk.String("Mr."),
                            },
                        },
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("odit"),
                                ID: sdk.String("e8c1f849-3825-4fdc-82c8-76c2c2dfb4cf"),
                                ThumbnailURL: sdk.String("quo"),
                                Title: sdk.String("Mr."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("nobis"),
                                ResponseURL: sdk.String("esse"),
                                ThumbnailURL: sdk.String("nisi"),
                                Title: sdk.String("Mr."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("sequi"),
                                Title: sdk.String("Mr."),
                                URL: sdk.String("reiciendis"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("quos"),
                                ID: sdk.String("41fb1bd2-3fdb-414d-b6be-5a685998e22a"),
                                ThumbnailURL: sdk.String("vero"),
                                Title: sdk.String("Mr."),
                            },
                        },
                    },
                    Title: sdk.String("Mr."),
                },
            },
            CourseState: shared.CourseCourseStateEnumSuspended.ToPointer(),
            CreationTime: sdk.String("id"),
            Description: sdk.String("quae"),
            DescriptionHeading: sdk.String("commodi"),
            EnrollmentCode: sdk.String("a"),
            GradebookSettings: &shared.GradebookSettings{
                CalculationType: shared.GradebookSettingsCalculationTypeEnumWeightedCategories.ToPointer(),
                DisplaySetting: shared.GradebookSettingsDisplaySettingEnumDisplaySettingUnspecified.ToPointer(),
                GradeCategories: []shared.GradeCategory{
                    shared.GradeCategory{
                        DefaultGradeDenominator: sdk.Int(155473),
                        ID: sdk.String("71a289c5-7e85-44e9-8439-d22246569462"),
                        Name: sdk.String("Ms. Sharon Kuhlman"),
                        Weight: sdk.Int(962411),
                    },
                    shared.GradeCategory{
                        DefaultGradeDenominator: sdk.Int(461853),
                        ID: sdk.String("ab37cef0-2225-4194-9b55-410adc669af9"),
                        Name: sdk.String("Sandy Considine"),
                        Weight: sdk.Int(477099),
                    },
                    shared.GradeCategory{
                        DefaultGradeDenominator: sdk.Int(805128),
                        ID: sdk.String("dc981f06-8981-4d6b-b33c-faa348c31bf4"),
                        Name: sdk.String("Dora Watsica"),
                        Weight: sdk.Int(987362),
                    },
                },
            },
            GuardiansEnabled: sdk.Bool(false),
            ID: sdk.String("cf0c42b7-8f15-4626-b98a-0dc766324ccb"),
            Name: sdk.String("Eileen Russel"),
            OwnerID: sdk.String("est"),
            Room: sdk.String("inventore"),
            Section: sdk.String("consequuntur"),
            TeacherFolder: &shared.DriveFolder{
                AlternateLink: sdk.String("repellendus"),
                ID: sdk.String("02529270-b8d5-4722-9d89-5b8bcf24db95"),
                Title: sdk.String("Miss"),
            },
            TeacherGroupEmail: sdk.String("nisi"),
            UpdateTime: sdk.String("provident"),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("qui"),
        ID: "f7453399-4d78-4de3-b6e9-389f5abb7f66",
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UpdateMask: sdk.String("doloremque"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("qui"),
    }, operations.ClassroomCoursesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Course != nil {
        // handle response
    }
}
```

## ClassroomCoursesStudentsCreate

Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesStudentsCreate(ctx, operations.ClassroomCoursesStudentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Student: &shared.Student{
            CourseID: sdk.String("adipisci"),
            Profile: &shared.UserProfile{
                EmailAddress: sdk.String("totam"),
                ID: sdk.String("2ac483af-d231-45bb-a650-164e06f5bf6a"),
                Name: &shared.Name{
                    FamilyName: sdk.String("repudiandae"),
                    FullName: sdk.String("nemo"),
                    GivenName: sdk.String("molestias"),
                },
                Permissions: []shared.GlobalPermission{
                    shared.GlobalPermission{
                        Permission: shared.GlobalPermissionPermissionEnumCreateCourse.ToPointer(),
                    },
                },
                PhotoURL: sdk.String("quisquam"),
                VerifiedTeacher: sdk.Bool(false),
            },
            StudentWorkFolder: &shared.DriveFolder{
                AlternateLink: sdk.String("praesentium"),
                ID: sdk.String("bdef3612-b63c-4205-bda8-40774a68a9a3"),
                Title: sdk.String("Mrs."),
            },
            UserID: sdk.String("illum"),
        },
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        CourseID: "expedita",
        EnrollmentCode: sdk.String("voluptas"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.ClassroomCoursesStudentsCreateSecurity{
        Option1: &operations.ClassroomCoursesStudentsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Student != nil {
        // handle response
    }
}
```

## ClassroomCoursesStudentsDelete

Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesStudentsDelete(ctx, operations.ClassroomCoursesStudentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptates"),
        CourseID: "provident",
        Fields: sdk.String("maiores"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("incidunt"),
        UserID: "dolores",
    }, operations.ClassroomCoursesStudentsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesStudentsGet

Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesStudentsGet(ctx, operations.ClassroomCoursesStudentsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        CourseID: "excepturi",
        Fields: sdk.String("eos"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("quibusdam"),
        UserID: "est",
    }, operations.ClassroomCoursesStudentsGetSecurity{
        Option1: &operations.ClassroomCoursesStudentsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Student != nil {
        // handle response
    }
}
```

## ClassroomCoursesStudentsList

Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesStudentsList(ctx, operations.ClassroomCoursesStudentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        CourseID: "recusandae",
        Fields: sdk.String("sapiente"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("odit"),
        PageSize: sdk.Int64(80467),
        PageToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.ClassroomCoursesStudentsListSecurity{
        Option1: &operations.ClassroomCoursesStudentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStudentsResponse != nil {
        // handle response
    }
}
```

## ClassroomCoursesTeachersCreate

Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesTeachersCreate(ctx, operations.ClassroomCoursesTeachersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Teacher: &shared.Teacher{
            CourseID: sdk.String("doloribus"),
            Profile: &shared.UserProfile{
                EmailAddress: sdk.String("pariatur"),
                ID: sdk.String("0a9eba47-f7d3-4ef0-8964-0d6a1831c87a"),
                Name: &shared.Name{
                    FamilyName: sdk.String("temporibus"),
                    FullName: sdk.String("a"),
                    GivenName: sdk.String("ad"),
                },
                Permissions: []shared.GlobalPermission{
                    shared.GlobalPermission{
                        Permission: shared.GlobalPermissionPermissionEnumPermissionUnspecified.ToPointer(),
                    },
                    shared.GlobalPermission{
                        Permission: shared.GlobalPermissionPermissionEnumCreateCourse.ToPointer(),
                    },
                    shared.GlobalPermission{
                        Permission: shared.GlobalPermissionPermissionEnumCreateCourse.ToPointer(),
                    },
                },
                PhotoURL: sdk.String("delectus"),
                VerifiedTeacher: sdk.Bool(false),
            },
            UserID: sdk.String("ab"),
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("praesentium"),
        CourseID: "neque",
        Fields: sdk.String("quam"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.ClassroomCoursesTeachersCreateSecurity{
        Option1: &operations.ClassroomCoursesTeachersCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teacher != nil {
        // handle response
    }
}
```

## ClassroomCoursesTeachersDelete

Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesTeachersDelete(ctx, operations.ClassroomCoursesTeachersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sint"),
        CourseID: "eligendi",
        Fields: sdk.String("occaecati"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("unde"),
        UserID: "quas",
    }, operations.ClassroomCoursesTeachersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesTeachersGet

Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesTeachersGet(ctx, operations.ClassroomCoursesTeachersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        CourseID: "deserunt",
        Fields: sdk.String("dolor"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("iste"),
        UserID: "cupiditate",
    }, operations.ClassroomCoursesTeachersGetSecurity{
        Option1: &operations.ClassroomCoursesTeachersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teacher != nil {
        // handle response
    }
}
```

## ClassroomCoursesTeachersList

Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesTeachersList(ctx, operations.ClassroomCoursesTeachersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolor"),
        CourseID: "voluptatum",
        Fields: sdk.String("molestias"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("repudiandae"),
        PageSize: sdk.Int64(50291),
        PageToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.ClassroomCoursesTeachersListSecurity{
        Option1: &operations.ClassroomCoursesTeachersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTeachersResponse != nil {
        // handle response
    }
}
```

## ClassroomCoursesTopicsCreate

Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesTopicsCreate(ctx, operations.ClassroomCoursesTopicsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Topic: &shared.Topic{
            CourseID: sdk.String("modi"),
            Name: sdk.String("Sylvester Kling"),
            TopicID: sdk.String("reprehenderit"),
            UpdateTime: sdk.String("animi"),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        CourseID: "qui",
        Fields: sdk.String("delectus"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("sed"),
    }, operations.ClassroomCoursesTopicsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Topic != nil {
        // handle response
    }
}
```

## ClassroomCoursesTopicsDelete

Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesTopicsDelete(ctx, operations.ClassroomCoursesTopicsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("itaque"),
        CourseID: "eveniet",
        Fields: sdk.String("repellat"),
        ID: "934152ed-7e25-43f4-8157-deaa7170f445",
        Key: sdk.String("est"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.ClassroomCoursesTopicsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ClassroomCoursesTopicsGet

Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesTopicsGet(ctx, operations.ClassroomCoursesTopicsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        CourseID: "repellat",
        Fields: sdk.String("cupiditate"),
        ID: "bbad185f-e431-4d6b-b5c8-38fbb8c20cb6",
        Key: sdk.String("odio"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.ClassroomCoursesTopicsGetSecurity{
        Option1: &operations.ClassroomCoursesTopicsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Topic != nil {
        // handle response
    }
}
```

## ClassroomCoursesTopicsList

Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesTopicsList(ctx, operations.ClassroomCoursesTopicsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        CourseID: "sint",
        Fields: sdk.String("occaecati"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("laboriosam"),
        PageSize: sdk.Int64(176281),
        PageToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.ClassroomCoursesTopicsListSecurity{
        Option1: &operations.ClassroomCoursesTopicsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTopicResponse != nil {
        // handle response
    }
}
```

## ClassroomCoursesTopicsPatch

Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesTopicsPatch(ctx, operations.ClassroomCoursesTopicsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Topic: &shared.Topic{
            CourseID: sdk.String("voluptate"),
            Name: sdk.String("Arnold Monahan"),
            TopicID: sdk.String("recusandae"),
            UpdateTime: sdk.String("expedita"),
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        CourseID: "ad",
        Fields: sdk.String("quod"),
        ID: "38d4baf9-1e50-46ef-890a-54b475f16f56",
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        UpdateMask: sdk.String("nostrum"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.ClassroomCoursesTopicsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Topic != nil {
        // handle response
    }
}
```

## ClassroomCoursesUpdate

Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesUpdate(ctx, operations.ClassroomCoursesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Course: &shared.Course{
            AlternateLink: sdk.String("numquam"),
            CalendarID: sdk.String("laborum"),
            CourseGroupEmail: sdk.String("eligendi"),
            CourseMaterialSets: []shared.CourseMaterialSet{
                shared.CourseMaterialSet{
                    Materials: []shared.CourseMaterial{
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("sunt"),
                                ID: sdk.String("b99e26ce-d8f9-4fdb-9410-f63bbf817837"),
                                ThumbnailURL: sdk.String("nam"),
                                Title: sdk.String("Mr."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("vitae"),
                                ResponseURL: sdk.String("mollitia"),
                                ThumbnailURL: sdk.String("asperiores"),
                                Title: sdk.String("Dr."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("quibusdam"),
                                Title: sdk.String("Ms."),
                                URL: sdk.String("deleniti"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("rem"),
                                ID: sdk.String("624189eb-4487-43f5-833f-19dbf125ce41"),
                                ThumbnailURL: sdk.String("minima"),
                                Title: sdk.String("Mr."),
                            },
                        },
                    },
                    Title: sdk.String("Dr."),
                },
                shared.CourseMaterialSet{
                    Materials: []shared.CourseMaterial{
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("expedita"),
                                ID: sdk.String("9cd7e522-4a6a-40e1-a3b7-847ec59e1f67"),
                                ThumbnailURL: sdk.String("repellat"),
                                Title: sdk.String("Mrs."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("cumque"),
                                ResponseURL: sdk.String("dolore"),
                                ThumbnailURL: sdk.String("optio"),
                                Title: sdk.String("Miss"),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("repudiandae"),
                                Title: sdk.String("Mrs."),
                                URL: sdk.String("libero"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("suscipit"),
                                ID: sdk.String("d7696ff3-c574-4750-9357-e44f51f8b084"),
                                ThumbnailURL: sdk.String("quo"),
                                Title: sdk.String("Mrs."),
                            },
                        },
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("sunt"),
                                ID: sdk.String("97e193a2-4546-47f9-8874-c2d5cc497223"),
                                ThumbnailURL: sdk.String("ratione"),
                                Title: sdk.String("Dr."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("iure"),
                                ResponseURL: sdk.String("aliquid"),
                                ThumbnailURL: sdk.String("cum"),
                                Title: sdk.String("Dr."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("rem"),
                                Title: sdk.String("Dr."),
                                URL: sdk.String("officiis"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("corporis"),
                                ID: sdk.String("d00b979e-f203-4873-a059-0ccc10964003"),
                                ThumbnailURL: sdk.String("beatae"),
                                Title: sdk.String("Mr."),
                            },
                        },
                        shared.CourseMaterial{
                            DriveFile: &shared.DriveFile{
                                AlternateLink: sdk.String("rerum"),
                                ID: sdk.String("3e5044f6-5fe7-42dc-8077-d0cc3f408efc"),
                                ThumbnailURL: sdk.String("dicta"),
                                Title: sdk.String("Mrs."),
                            },
                            Form: &shared.Form{
                                FormURL: sdk.String("impedit"),
                                ResponseURL: sdk.String("eveniet"),
                                ThumbnailURL: sdk.String("cum"),
                                Title: sdk.String("Mrs."),
                            },
                            Link: &shared.Link{
                                ThumbnailURL: sdk.String("illum"),
                                Title: sdk.String("Ms."),
                                URL: sdk.String("officiis"),
                            },
                            YouTubeVideo: &shared.YouTubeVideo{
                                AlternateLink: sdk.String("quasi"),
                                ID: sdk.String("eae0f75a-edf2-4aca-b58b-991c926ddb58"),
                                ThumbnailURL: sdk.String("sint"),
                                Title: sdk.String("Mrs."),
                            },
                        },
                    },
                    Title: sdk.String("Ms."),
                },
            },
            CourseState: shared.CourseCourseStateEnumCourseStateUnspecified.ToPointer(),
            CreationTime: sdk.String("vero"),
            Description: sdk.String("odio"),
            DescriptionHeading: sdk.String("numquam"),
            EnrollmentCode: sdk.String("fugit"),
            GradebookSettings: &shared.GradebookSettings{
                CalculationType: shared.GradebookSettingsCalculationTypeEnumCalculationTypeUnspecified.ToPointer(),
                DisplaySetting: shared.GradebookSettingsDisplaySettingEnumShowTeachersOnly.ToPointer(),
                GradeCategories: []shared.GradeCategory{
                    shared.GradeCategory{
                        DefaultGradeDenominator: sdk.Int(924559),
                        ID: sdk.String("6d9502f0-ea93-40b6-9f7a-c2f72f885009"),
                        Name: sdk.String("Mr. Anita Mayert"),
                        Weight: sdk.Int(43928),
                    },
                    shared.GradeCategory{
                        DefaultGradeDenominator: sdk.Int(558523),
                        ID: sdk.String("207888ec-6618-43bf-a965-9eb40ec16faf"),
                        Name: sdk.String("Miss Audrey Prosacco"),
                        Weight: sdk.Int(191571),
                    },
                    shared.GradeCategory{
                        DefaultGradeDenominator: sdk.Int(180811),
                        ID: sdk.String("a4da37cb-aaf4-4452-8484-2c9b2ad32daf"),
                        Name: sdk.String("Bob Boyle"),
                        Weight: sdk.Int(500692),
                    },
                },
            },
            GuardiansEnabled: sdk.Bool(false),
            ID: sdk.String("f4444573-fecd-4473-93f6-3c8209379aa6"),
            Name: sdk.String("Earnest Strosin"),
            OwnerID: sdk.String("nam"),
            Room: sdk.String("cumque"),
            Section: sdk.String("sapiente"),
            TeacherFolder: &shared.DriveFolder{
                AlternateLink: sdk.String("quam"),
                ID: sdk.String("9da18a78-22bf-4958-94e6-861adb55f9e5"),
                Title: sdk.String("Dr."),
            },
            TeacherGroupEmail: sdk.String("odio"),
            UpdateTime: sdk.String("ullam"),
        },
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("doloribus"),
        ID: "e8f7502b-fdc3-4450-841f-1764456379f3",
        Key: sdk.String("hic"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.ClassroomCoursesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Course != nil {
        // handle response
    }
}
```
