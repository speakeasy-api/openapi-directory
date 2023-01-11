package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest {
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams pathParams;
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest withPathParams(ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams queryParams;
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest withQueryParams(ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyAttachmentsRequest request;
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest withRequest(openapisdk.models.shared.ModifyAttachmentsRequest request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity security;
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest withSecurity(ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity security) {
        this.security = security;
        return this;
    }
}