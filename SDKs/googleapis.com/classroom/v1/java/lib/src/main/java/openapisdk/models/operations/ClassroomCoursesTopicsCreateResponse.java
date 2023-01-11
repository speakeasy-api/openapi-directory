package openapisdk.models.operations;



public class ClassroomCoursesTopicsCreateResponse {
    public String contentType;
    public ClassroomCoursesTopicsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesTopicsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Topic topic;
    public ClassroomCoursesTopicsCreateResponse withTopic(openapisdk.models.shared.Topic topic) {
        this.topic = topic;
        return this;
    }
}