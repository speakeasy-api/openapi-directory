package openapisdk.models.operations;



public class StoryIdStatusGetResponse {
    public String contentType;
    public StoryIdStatusGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdStatusGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdStatusGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public Object status;
    public StoryIdStatusGetResponse withStatus(Object status) {
        this.status = status;
        return this;
    }
}