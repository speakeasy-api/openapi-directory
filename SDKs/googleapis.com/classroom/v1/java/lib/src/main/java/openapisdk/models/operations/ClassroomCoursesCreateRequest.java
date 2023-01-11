package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCreateRequest {
    public ClassroomCoursesCreateQueryParams queryParams;
    public ClassroomCoursesCreateRequest withQueryParams(ClassroomCoursesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Course request;
    public ClassroomCoursesCreateRequest withRequest(openapisdk.models.shared.Course request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesCreateSecurity security;
    public ClassroomCoursesCreateRequest withSecurity(ClassroomCoursesCreateSecurity security) {
        this.security = security;
        return this;
    }
}