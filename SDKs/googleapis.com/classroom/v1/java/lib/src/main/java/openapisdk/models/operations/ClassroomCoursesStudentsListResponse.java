package openapisdk.models.operations;



public class ClassroomCoursesStudentsListResponse {
    public String contentType;
    public ClassroomCoursesStudentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListStudentsResponse listStudentsResponse;
    public ClassroomCoursesStudentsListResponse withListStudentsResponse(openapisdk.models.shared.ListStudentsResponse listStudentsResponse) {
        this.listStudentsResponse = listStudentsResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesStudentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}