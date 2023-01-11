package openapisdk.models.operations;



public class LicensingModelsResponse {
    public byte[] body;
    public LicensingModelsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public LicensingModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LicensingModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public LicensingModelsResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}