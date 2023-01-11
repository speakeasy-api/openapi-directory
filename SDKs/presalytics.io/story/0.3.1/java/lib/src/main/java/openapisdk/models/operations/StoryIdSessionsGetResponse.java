package openapisdk.models.operations;



public class StoryIdSessionsGetResponse {
    public String contentType;
    public StoryIdSessionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdSessionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdSessionsGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.Session[] sessions;
    public StoryIdSessionsGetResponse withSessions(openapisdk.models.shared.Session[] sessions) {
        this.sessions = sessions;
        return this;
    }
}