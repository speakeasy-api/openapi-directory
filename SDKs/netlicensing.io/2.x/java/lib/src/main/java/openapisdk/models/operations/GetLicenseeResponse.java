package openapisdk.models.operations;



public class GetLicenseeResponse {
    public byte[] body;
    public GetLicenseeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetLicenseeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLicenseeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public GetLicenseeResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}