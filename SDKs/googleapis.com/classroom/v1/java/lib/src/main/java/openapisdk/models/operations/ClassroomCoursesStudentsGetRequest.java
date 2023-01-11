package openapisdk.models.operations;



public class ClassroomCoursesStudentsGetRequest {
    public ClassroomCoursesStudentsGetPathParams pathParams;
    public ClassroomCoursesStudentsGetRequest withPathParams(ClassroomCoursesStudentsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesStudentsGetQueryParams queryParams;
    public ClassroomCoursesStudentsGetRequest withQueryParams(ClassroomCoursesStudentsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassroomCoursesStudentsGetSecurity security;
    public ClassroomCoursesStudentsGetRequest withSecurity(ClassroomCoursesStudentsGetSecurity security) {
        this.security = security;
        return this;
    }
}