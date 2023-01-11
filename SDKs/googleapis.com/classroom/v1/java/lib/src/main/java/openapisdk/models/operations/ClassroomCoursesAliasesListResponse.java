package openapisdk.models.operations;



public class ClassroomCoursesAliasesListResponse {
    public String contentType;
    public ClassroomCoursesAliasesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCourseAliasesResponse listCourseAliasesResponse;
    public ClassroomCoursesAliasesListResponse withListCourseAliasesResponse(openapisdk.models.shared.ListCourseAliasesResponse listCourseAliasesResponse) {
        this.listCourseAliasesResponse = listCourseAliasesResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesAliasesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}