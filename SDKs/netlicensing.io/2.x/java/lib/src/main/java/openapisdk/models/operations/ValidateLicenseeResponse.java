package openapisdk.models.operations;



public class ValidateLicenseeResponse {
    public byte[] body;
    public ValidateLicenseeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ValidateLicenseeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ValidateLicenseeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public ValidateLicenseeResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}