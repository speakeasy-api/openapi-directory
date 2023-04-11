import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Courses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).
     */
    classroomCoursesAliasesCreate(req: operations.ClassroomCoursesAliasesCreateRequest, security: operations.ClassroomCoursesAliasesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesAliasesCreateResponse>;
    /**
     * Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).
     */
    classroomCoursesAliasesDelete(req: operations.ClassroomCoursesAliasesDeleteRequest, security: operations.ClassroomCoursesAliasesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesAliasesDeleteResponse>;
    /**
     * Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.
     */
    classroomCoursesAliasesList(req: operations.ClassroomCoursesAliasesListRequest, security: operations.ClassroomCoursesAliasesListSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesAliasesListResponse>;
    /**
     * Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
     */
    classroomCoursesAnnouncementsCreate(req: operations.ClassroomCoursesAnnouncementsCreateRequest, security: operations.ClassroomCoursesAnnouncementsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesAnnouncementsCreateResponse>;
    /**
     * Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
     */
    classroomCoursesAnnouncementsDelete(req: operations.ClassroomCoursesAnnouncementsDeleteRequest, security: operations.ClassroomCoursesAnnouncementsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesAnnouncementsDeleteResponse>;
    /**
     * Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.
     */
    classroomCoursesAnnouncementsGet(req: operations.ClassroomCoursesAnnouncementsGetRequest, security: operations.ClassroomCoursesAnnouncementsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesAnnouncementsGetResponse>;
    /**
     * Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     */
    classroomCoursesAnnouncementsList(req: operations.ClassroomCoursesAnnouncementsListRequest, security: operations.ClassroomCoursesAnnouncementsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesAnnouncementsListResponse>;
    /**
     * Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
     */
    classroomCoursesAnnouncementsModifyAssignees(req: operations.ClassroomCoursesAnnouncementsModifyAssigneesRequest, security: operations.ClassroomCoursesAnnouncementsModifyAssigneesSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesAnnouncementsModifyAssigneesResponse>;
    /**
     * Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist
     */
    classroomCoursesAnnouncementsPatch(req: operations.ClassroomCoursesAnnouncementsPatchRequest, security: operations.ClassroomCoursesAnnouncementsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesAnnouncementsPatchResponse>;
    /**
     * Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
     */
    classroomCoursesCourseWorkCreate(req: operations.ClassroomCoursesCourseWorkCreateRequest, security: operations.ClassroomCoursesCourseWorkCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkCreateResponse>;
    /**
     * Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
     */
    classroomCoursesCourseWorkDelete(req: operations.ClassroomCoursesCourseWorkDeleteRequest, security: operations.ClassroomCoursesCourseWorkDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkDeleteResponse>;
    /**
     * Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
     */
    classroomCoursesCourseWorkGet(req: operations.ClassroomCoursesCourseWorkGetRequest, security: operations.ClassroomCoursesCourseWorkGetSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkGetResponse>;
    /**
     * Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     */
    classroomCoursesCourseWorkList(req: operations.ClassroomCoursesCourseWorkListRequest, security: operations.ClassroomCoursesCourseWorkListSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkListResponse>;
    /**
     * Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
     */
    classroomCoursesCourseWorkModifyAssignees(req: operations.ClassroomCoursesCourseWorkModifyAssigneesRequest, security: operations.ClassroomCoursesCourseWorkModifyAssigneesSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkModifyAssigneesResponse>;
    /**
     * Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     */
    classroomCoursesCourseWorkPatch(req: operations.ClassroomCoursesCourseWorkPatchRequest, security: operations.ClassroomCoursesCourseWorkPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkPatchResponse>;
    /**
     * Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     */
    classroomCoursesCourseWorkStudentSubmissionsGet(req: operations.ClassroomCoursesCourseWorkStudentSubmissionsGetRequest, security: operations.ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkStudentSubmissionsGetResponse>;
    /**
     * Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     */
    classroomCoursesCourseWorkStudentSubmissionsList(req: operations.ClassroomCoursesCourseWorkStudentSubmissionsListRequest, security: operations.ClassroomCoursesCourseWorkStudentSubmissionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkStudentSubmissionsListResponse>;
    /**
     * Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     */
    classroomCoursesCourseWorkStudentSubmissionsModifyAttachments(req: operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest, security: operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse>;
    /**
     * Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     */
    classroomCoursesCourseWorkStudentSubmissionsPatch(req: operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest, security: operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse>;
    /**
     * Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     */
    classroomCoursesCourseWorkStudentSubmissionsReclaim(req: operations.ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest, security: operations.ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse>;
    /**
     * Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     */
    classroomCoursesCourseWorkStudentSubmissionsReturn(req: operations.ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest, security: operations.ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse>;
    /**
     * Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     */
    classroomCoursesCourseWorkStudentSubmissionsTurnIn(req: operations.ClassroomCoursesCourseWorkStudentSubmissionsTurnInRequest, security: operations.ClassroomCoursesCourseWorkStudentSubmissionsTurnInSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkStudentSubmissionsTurnInResponse>;
    /**
     * Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
     */
    classroomCoursesCourseWorkMaterialsCreate(req: operations.ClassroomCoursesCourseWorkMaterialsCreateRequest, security: operations.ClassroomCoursesCourseWorkMaterialsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkMaterialsCreateResponse>;
    /**
     * Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
     */
    classroomCoursesCourseWorkMaterialsDelete(req: operations.ClassroomCoursesCourseWorkMaterialsDeleteRequest, security: operations.ClassroomCoursesCourseWorkMaterialsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkMaterialsDeleteResponse>;
    /**
     * Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.
     */
    classroomCoursesCourseWorkMaterialsGet(req: operations.ClassroomCoursesCourseWorkMaterialsGetRequest, security: operations.ClassroomCoursesCourseWorkMaterialsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkMaterialsGetResponse>;
    /**
     * Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     */
    classroomCoursesCourseWorkMaterialsList(req: operations.ClassroomCoursesCourseWorkMaterialsListRequest, security: operations.ClassroomCoursesCourseWorkMaterialsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkMaterialsListResponse>;
    /**
     * Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist
     */
    classroomCoursesCourseWorkMaterialsPatch(req: operations.ClassroomCoursesCourseWorkMaterialsPatchRequest, security: operations.ClassroomCoursesCourseWorkMaterialsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCourseWorkMaterialsPatchResponse>;
    /**
     * Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserCannotOwnCourse * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.
     */
    classroomCoursesCreate(req: operations.ClassroomCoursesCreateRequest, security: operations.ClassroomCoursesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesCreateResponse>;
    /**
     * Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
     */
    classroomCoursesDelete(req: operations.ClassroomCoursesDeleteRequest, security: operations.ClassroomCoursesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesDeleteResponse>;
    /**
     * Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
     */
    classroomCoursesGet(req: operations.ClassroomCoursesGetRequest, security: operations.ClassroomCoursesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesGetResponse>;
    /**
     * Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.
     */
    classroomCoursesList(req: operations.ClassroomCoursesListRequest, security: operations.ClassroomCoursesListSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesListResponse>;
    /**
     * Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner
     */
    classroomCoursesPatch(req: operations.ClassroomCoursesPatchRequest, security: operations.ClassroomCoursesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesPatchResponse>;
    /**
     * Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.
     */
    classroomCoursesStudentsCreate(req: operations.ClassroomCoursesStudentsCreateRequest, security: operations.ClassroomCoursesStudentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesStudentsCreateResponse>;
    /**
     * Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
     */
    classroomCoursesStudentsDelete(req: operations.ClassroomCoursesStudentsDeleteRequest, security: operations.ClassroomCoursesStudentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesStudentsDeleteResponse>;
    /**
     * Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
     */
    classroomCoursesStudentsGet(req: operations.ClassroomCoursesStudentsGetRequest, security: operations.ClassroomCoursesStudentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesStudentsGetResponse>;
    /**
     * Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
     */
    classroomCoursesStudentsList(req: operations.ClassroomCoursesStudentsListRequest, security: operations.ClassroomCoursesStudentsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesStudentsListResponse>;
    /**
     * Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.
     */
    classroomCoursesTeachersCreate(req: operations.ClassroomCoursesTeachersCreateRequest, security: operations.ClassroomCoursesTeachersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesTeachersCreateResponse>;
    /**
     * Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.
     */
    classroomCoursesTeachersDelete(req: operations.ClassroomCoursesTeachersDeleteRequest, security: operations.ClassroomCoursesTeachersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesTeachersDeleteResponse>;
    /**
     * Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.
     */
    classroomCoursesTeachersGet(req: operations.ClassroomCoursesTeachersGetRequest, security: operations.ClassroomCoursesTeachersGetSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesTeachersGetResponse>;
    /**
     * Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
     */
    classroomCoursesTeachersList(req: operations.ClassroomCoursesTeachersListRequest, security: operations.ClassroomCoursesTeachersListSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesTeachersListResponse>;
    /**
     * Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     */
    classroomCoursesTopicsCreate(req: operations.ClassroomCoursesTopicsCreateRequest, security: operations.ClassroomCoursesTopicsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesTopicsCreateResponse>;
    /**
     * Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.
     */
    classroomCoursesTopicsDelete(req: operations.ClassroomCoursesTopicsDeleteRequest, security: operations.ClassroomCoursesTopicsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesTopicsDeleteResponse>;
    /**
     * Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.
     */
    classroomCoursesTopicsGet(req: operations.ClassroomCoursesTopicsGetRequest, security: operations.ClassroomCoursesTopicsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesTopicsGetResponse>;
    /**
     * Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     */
    classroomCoursesTopicsList(req: operations.ClassroomCoursesTopicsListRequest, security: operations.ClassroomCoursesTopicsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesTopicsListResponse>;
    /**
     * Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist
     */
    classroomCoursesTopicsPatch(req: operations.ClassroomCoursesTopicsPatchRequest, security: operations.ClassroomCoursesTopicsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesTopicsPatchResponse>;
    /**
     * Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
     */
    classroomCoursesUpdate(req: operations.ClassroomCoursesUpdateRequest, security: operations.ClassroomCoursesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ClassroomCoursesUpdateResponse>;
}
