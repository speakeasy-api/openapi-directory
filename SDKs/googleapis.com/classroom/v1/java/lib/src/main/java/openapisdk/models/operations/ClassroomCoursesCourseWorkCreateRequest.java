package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkCreateRequest {
    public ClassroomCoursesCourseWorkCreatePathParams pathParams;
    public ClassroomCoursesCourseWorkCreateRequest withPathParams(ClassroomCoursesCourseWorkCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesCourseWorkCreateQueryParams queryParams;
    public ClassroomCoursesCourseWorkCreateRequest withQueryParams(ClassroomCoursesCourseWorkCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CourseWork request;
    public ClassroomCoursesCourseWorkCreateRequest withRequest(openapisdk.models.shared.CourseWork request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesCourseWorkCreateSecurity security;
    public ClassroomCoursesCourseWorkCreateRequest withSecurity(ClassroomCoursesCourseWorkCreateSecurity security) {
        this.security = security;
        return this;
    }
}