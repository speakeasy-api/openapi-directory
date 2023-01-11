package openapisdk.models.operations;



public class ClassroomCoursesListResponse {
    public String contentType;
    public ClassroomCoursesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCoursesResponse listCoursesResponse;
    public ClassroomCoursesListResponse withListCoursesResponse(openapisdk.models.shared.ListCoursesResponse listCoursesResponse) {
        this.listCoursesResponse = listCoursesResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}