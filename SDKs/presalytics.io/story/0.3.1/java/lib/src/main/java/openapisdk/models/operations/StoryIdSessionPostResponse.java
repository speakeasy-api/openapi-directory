package openapisdk.models.operations;



public class StoryIdSessionPostResponse {
    public String contentType;
    public StoryIdSessionPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdSessionPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdSessionPostResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.Session session;
    public StoryIdSessionPostResponse withSession(openapisdk.models.shared.Session session) {
        this.session = session;
        return this;
    }
}