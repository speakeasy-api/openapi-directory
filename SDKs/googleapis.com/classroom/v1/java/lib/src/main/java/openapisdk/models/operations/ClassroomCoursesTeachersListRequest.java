package openapisdk.models.operations;



public class ClassroomCoursesTeachersListRequest {
    public ClassroomCoursesTeachersListPathParams pathParams;
    public ClassroomCoursesTeachersListRequest withPathParams(ClassroomCoursesTeachersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesTeachersListQueryParams queryParams;
    public ClassroomCoursesTeachersListRequest withQueryParams(ClassroomCoursesTeachersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassroomCoursesTeachersListSecurity security;
    public ClassroomCoursesTeachersListRequest withSecurity(ClassroomCoursesTeachersListSecurity security) {
        this.security = security;
        return this;
    }
}