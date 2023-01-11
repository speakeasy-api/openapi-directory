package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesPatchRequest {
    public ClassroomCoursesPatchPathParams pathParams;
    public ClassroomCoursesPatchRequest withPathParams(ClassroomCoursesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesPatchQueryParams queryParams;
    public ClassroomCoursesPatchRequest withQueryParams(ClassroomCoursesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Course request;
    public ClassroomCoursesPatchRequest withRequest(openapisdk.models.shared.Course request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesPatchSecurity security;
    public ClassroomCoursesPatchRequest withSecurity(ClassroomCoursesPatchSecurity security) {
        this.security = security;
        return this;
    }
}