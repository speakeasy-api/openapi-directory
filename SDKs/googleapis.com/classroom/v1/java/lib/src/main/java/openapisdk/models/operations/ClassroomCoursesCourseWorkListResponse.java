package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkListResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCourseWorkResponse listCourseWorkResponse;
    public ClassroomCoursesCourseWorkListResponse withListCourseWorkResponse(openapisdk.models.shared.ListCourseWorkResponse listCourseWorkResponse) {
        this.listCourseWorkResponse = listCourseWorkResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}