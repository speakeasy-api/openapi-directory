package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkPatchRequest {
    public ClassroomCoursesCourseWorkPatchPathParams pathParams;
    public ClassroomCoursesCourseWorkPatchRequest withPathParams(ClassroomCoursesCourseWorkPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesCourseWorkPatchQueryParams queryParams;
    public ClassroomCoursesCourseWorkPatchRequest withQueryParams(ClassroomCoursesCourseWorkPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CourseWork request;
    public ClassroomCoursesCourseWorkPatchRequest withRequest(openapisdk.models.shared.CourseWork request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesCourseWorkPatchSecurity security;
    public ClassroomCoursesCourseWorkPatchRequest withSecurity(ClassroomCoursesCourseWorkPatchSecurity security) {
        this.security = security;
        return this;
    }
}