package openapisdk.models.operations;



public class CreateLicenseResponse {
    public byte[] body;
    public CreateLicenseResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateLicenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateLicenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public CreateLicenseResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}