package openapisdk.models.operations;



public class CacheNonceGetResponse {
    public String contentType;
    public CacheNonceGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String loginButton;
    public CacheNonceGetResponse withLoginButton(String loginButton) {
        this.loginButton = loginButton;
        return this;
    }
    public Long statusCode;
    public CacheNonceGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public CacheNonceGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
}