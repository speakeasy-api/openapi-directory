package openapisdk.models.operations;



public class UpdateLicenseResponse {
    public byte[] body;
    public UpdateLicenseResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateLicenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateLicenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public UpdateLicenseResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}