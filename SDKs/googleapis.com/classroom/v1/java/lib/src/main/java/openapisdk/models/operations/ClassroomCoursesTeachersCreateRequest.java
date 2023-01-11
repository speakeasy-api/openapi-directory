package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesTeachersCreateRequest {
    public ClassroomCoursesTeachersCreatePathParams pathParams;
    public ClassroomCoursesTeachersCreateRequest withPathParams(ClassroomCoursesTeachersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesTeachersCreateQueryParams queryParams;
    public ClassroomCoursesTeachersCreateRequest withQueryParams(ClassroomCoursesTeachersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Teacher request;
    public ClassroomCoursesTeachersCreateRequest withRequest(openapisdk.models.shared.Teacher request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesTeachersCreateSecurity security;
    public ClassroomCoursesTeachersCreateRequest withSecurity(ClassroomCoursesTeachersCreateSecurity security) {
        this.security = security;
        return this;
    }
}