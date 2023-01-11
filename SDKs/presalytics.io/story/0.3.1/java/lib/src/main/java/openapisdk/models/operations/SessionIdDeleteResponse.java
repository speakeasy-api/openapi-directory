package openapisdk.models.operations;



public class SessionIdDeleteResponse {
    public String contentType;
    public SessionIdDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SessionIdDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public SessionIdDeleteResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
}