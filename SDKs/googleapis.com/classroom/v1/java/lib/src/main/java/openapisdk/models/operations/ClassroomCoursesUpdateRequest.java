package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesUpdateRequest {
    public ClassroomCoursesUpdatePathParams pathParams;
    public ClassroomCoursesUpdateRequest withPathParams(ClassroomCoursesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesUpdateQueryParams queryParams;
    public ClassroomCoursesUpdateRequest withQueryParams(ClassroomCoursesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Course request;
    public ClassroomCoursesUpdateRequest withRequest(openapisdk.models.shared.Course request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesUpdateSecurity security;
    public ClassroomCoursesUpdateRequest withSecurity(ClassroomCoursesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}