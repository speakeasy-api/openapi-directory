package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAliasesCreateRequest {
    public ClassroomCoursesAliasesCreatePathParams pathParams;
    public ClassroomCoursesAliasesCreateRequest withPathParams(ClassroomCoursesAliasesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesAliasesCreateQueryParams queryParams;
    public ClassroomCoursesAliasesCreateRequest withQueryParams(ClassroomCoursesAliasesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CourseAlias request;
    public ClassroomCoursesAliasesCreateRequest withRequest(openapisdk.models.shared.CourseAlias request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesAliasesCreateSecurity security;
    public ClassroomCoursesAliasesCreateRequest withSecurity(ClassroomCoursesAliasesCreateSecurity security) {
        this.security = security;
        return this;
    }
}