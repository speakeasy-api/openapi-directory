package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesTopicsCreateRequest {
    public ClassroomCoursesTopicsCreatePathParams pathParams;
    public ClassroomCoursesTopicsCreateRequest withPathParams(ClassroomCoursesTopicsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesTopicsCreateQueryParams queryParams;
    public ClassroomCoursesTopicsCreateRequest withQueryParams(ClassroomCoursesTopicsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Topic request;
    public ClassroomCoursesTopicsCreateRequest withRequest(openapisdk.models.shared.Topic request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesTopicsCreateSecurity security;
    public ClassroomCoursesTopicsCreateRequest withSecurity(ClassroomCoursesTopicsCreateSecurity security) {
        this.security = security;
        return this;
    }
}