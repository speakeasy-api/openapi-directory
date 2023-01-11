package openapisdk.models.operations;



public class ClassroomCoursesTeachersGetRequest {
    public ClassroomCoursesTeachersGetPathParams pathParams;
    public ClassroomCoursesTeachersGetRequest withPathParams(ClassroomCoursesTeachersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesTeachersGetQueryParams queryParams;
    public ClassroomCoursesTeachersGetRequest withQueryParams(ClassroomCoursesTeachersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassroomCoursesTeachersGetSecurity security;
    public ClassroomCoursesTeachersGetRequest withSecurity(ClassroomCoursesTeachersGetSecurity security) {
        this.security = security;
        return this;
    }
}