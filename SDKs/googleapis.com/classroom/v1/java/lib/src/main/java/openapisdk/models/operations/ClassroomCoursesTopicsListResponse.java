package openapisdk.models.operations;



public class ClassroomCoursesTopicsListResponse {
    public String contentType;
    public ClassroomCoursesTopicsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTopicResponse listTopicResponse;
    public ClassroomCoursesTopicsListResponse withListTopicResponse(openapisdk.models.shared.ListTopicResponse listTopicResponse) {
        this.listTopicResponse = listTopicResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesTopicsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}