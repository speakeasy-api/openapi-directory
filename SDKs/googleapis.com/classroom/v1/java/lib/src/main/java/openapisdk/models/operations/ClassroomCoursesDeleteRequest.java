package openapisdk.models.operations;



public class ClassroomCoursesDeleteRequest {
    public ClassroomCoursesDeletePathParams pathParams;
    public ClassroomCoursesDeleteRequest withPathParams(ClassroomCoursesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesDeleteQueryParams queryParams;
    public ClassroomCoursesDeleteRequest withQueryParams(ClassroomCoursesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassroomCoursesDeleteSecurity security;
    public ClassroomCoursesDeleteRequest withSecurity(ClassroomCoursesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}