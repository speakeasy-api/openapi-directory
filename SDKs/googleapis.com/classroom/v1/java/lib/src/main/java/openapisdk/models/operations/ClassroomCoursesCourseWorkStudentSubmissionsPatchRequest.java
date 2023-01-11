package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest {
    public ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams pathParams;
    public ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest withPathParams(ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams queryParams;
    public ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest withQueryParams(ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StudentSubmission request;
    public ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest withRequest(openapisdk.models.shared.StudentSubmission request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity security;
    public ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest withSecurity(ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}