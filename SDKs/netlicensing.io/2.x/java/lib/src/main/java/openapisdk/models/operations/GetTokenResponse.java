package openapisdk.models.operations;



public class GetTokenResponse {
    public byte[] body;
    public GetTokenResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public GetTokenResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}