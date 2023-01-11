package openapisdk.models.operations;



public class ClassroomCoursesTopicsPatchResponse {
    public String contentType;
    public ClassroomCoursesTopicsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesTopicsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Topic topic;
    public ClassroomCoursesTopicsPatchResponse withTopic(openapisdk.models.shared.Topic topic) {
        this.topic = topic;
        return this;
    }
}