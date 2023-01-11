package openapisdk.models.operations;



public class GetLicenseResponse {
    public byte[] body;
    public GetLicenseResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetLicenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLicenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public GetLicenseResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}