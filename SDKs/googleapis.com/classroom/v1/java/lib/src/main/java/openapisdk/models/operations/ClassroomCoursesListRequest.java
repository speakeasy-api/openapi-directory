package openapisdk.models.operations;



public class ClassroomCoursesListRequest {
    public ClassroomCoursesListQueryParams queryParams;
    public ClassroomCoursesListRequest withQueryParams(ClassroomCoursesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassroomCoursesListSecurity security;
    public ClassroomCoursesListRequest withSecurity(ClassroomCoursesListSecurity security) {
        this.security = security;
        return this;
    }
}