package openapisdk.models.operations;



public class CreateTokenResponse {
    public byte[] body;
    public CreateTokenResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public CreateTokenResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}