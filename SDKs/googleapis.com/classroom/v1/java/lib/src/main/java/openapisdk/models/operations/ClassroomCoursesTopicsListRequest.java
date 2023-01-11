package openapisdk.models.operations;



public class ClassroomCoursesTopicsListRequest {
    public ClassroomCoursesTopicsListPathParams pathParams;
    public ClassroomCoursesTopicsListRequest withPathParams(ClassroomCoursesTopicsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesTopicsListQueryParams queryParams;
    public ClassroomCoursesTopicsListRequest withQueryParams(ClassroomCoursesTopicsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassroomCoursesTopicsListSecurity security;
    public ClassroomCoursesTopicsListRequest withSecurity(ClassroomCoursesTopicsListSecurity security) {
        this.security = security;
        return this;
    }
}