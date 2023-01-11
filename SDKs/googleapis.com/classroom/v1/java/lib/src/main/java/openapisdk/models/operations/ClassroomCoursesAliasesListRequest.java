package openapisdk.models.operations;



public class ClassroomCoursesAliasesListRequest {
    public ClassroomCoursesAliasesListPathParams pathParams;
    public ClassroomCoursesAliasesListRequest withPathParams(ClassroomCoursesAliasesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesAliasesListQueryParams queryParams;
    public ClassroomCoursesAliasesListRequest withQueryParams(ClassroomCoursesAliasesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassroomCoursesAliasesListSecurity security;
    public ClassroomCoursesAliasesListRequest withSecurity(ClassroomCoursesAliasesListSecurity security) {
        this.security = security;
        return this;
    }
}