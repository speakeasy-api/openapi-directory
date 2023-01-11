package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkListRequest {
    public ClassroomCoursesCourseWorkListPathParams pathParams;
    public ClassroomCoursesCourseWorkListRequest withPathParams(ClassroomCoursesCourseWorkListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesCourseWorkListQueryParams queryParams;
    public ClassroomCoursesCourseWorkListRequest withQueryParams(ClassroomCoursesCourseWorkListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassroomCoursesCourseWorkListSecurity security;
    public ClassroomCoursesCourseWorkListRequest withSecurity(ClassroomCoursesCourseWorkListSecurity security) {
        this.security = security;
        return this;
    }
}