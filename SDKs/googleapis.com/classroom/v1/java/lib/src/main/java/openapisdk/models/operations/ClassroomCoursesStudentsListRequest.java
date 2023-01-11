package openapisdk.models.operations;



public class ClassroomCoursesStudentsListRequest {
    public ClassroomCoursesStudentsListPathParams pathParams;
    public ClassroomCoursesStudentsListRequest withPathParams(ClassroomCoursesStudentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesStudentsListQueryParams queryParams;
    public ClassroomCoursesStudentsListRequest withQueryParams(ClassroomCoursesStudentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassroomCoursesStudentsListSecurity security;
    public ClassroomCoursesStudentsListRequest withSecurity(ClassroomCoursesStudentsListSecurity security) {
        this.security = security;
        return this;
    }
}