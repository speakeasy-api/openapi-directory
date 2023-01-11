package openapisdk.models.operations;



public class ClassroomCoursesTopicsGetResponse {
    public String contentType;
    public ClassroomCoursesTopicsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesTopicsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Topic topic;
    public ClassroomCoursesTopicsGetResponse withTopic(openapisdk.models.shared.Topic topic) {
        this.topic = topic;
        return this;
    }
}