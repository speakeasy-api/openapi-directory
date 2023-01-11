package openapisdk.models.operations;



public class LicenseTypesResponse {
    public byte[] body;
    public LicenseTypesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public LicenseTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LicenseTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public LicenseTypesResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}