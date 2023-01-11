package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesStudentsCreateRequest {
    public ClassroomCoursesStudentsCreatePathParams pathParams;
    public ClassroomCoursesStudentsCreateRequest withPathParams(ClassroomCoursesStudentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesStudentsCreateQueryParams queryParams;
    public ClassroomCoursesStudentsCreateRequest withQueryParams(ClassroomCoursesStudentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Student request;
    public ClassroomCoursesStudentsCreateRequest withRequest(openapisdk.models.shared.Student request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesStudentsCreateSecurity security;
    public ClassroomCoursesStudentsCreateRequest withSecurity(ClassroomCoursesStudentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}