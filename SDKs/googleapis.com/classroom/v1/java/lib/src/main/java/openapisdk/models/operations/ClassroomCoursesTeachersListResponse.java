package openapisdk.models.operations;



public class ClassroomCoursesTeachersListResponse {
    public String contentType;
    public ClassroomCoursesTeachersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTeachersResponse listTeachersResponse;
    public ClassroomCoursesTeachersListResponse withListTeachersResponse(openapisdk.models.shared.ListTeachersResponse listTeachersResponse) {
        this.listTeachersResponse = listTeachersResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesTeachersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}