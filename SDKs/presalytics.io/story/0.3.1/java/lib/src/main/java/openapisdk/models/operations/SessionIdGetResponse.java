package openapisdk.models.operations;



public class SessionIdGetResponse {
    public String contentType;
    public SessionIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SessionIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public SessionIdGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.Session session;
    public SessionIdGetResponse withSession(openapisdk.models.shared.Session session) {
        this.session = session;
        return this;
    }
}