package openapisdk.models.operations;



public class CreateLicenseeResponse {
    public byte[] body;
    public CreateLicenseeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateLicenseeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateLicenseeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public CreateLicenseeResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}