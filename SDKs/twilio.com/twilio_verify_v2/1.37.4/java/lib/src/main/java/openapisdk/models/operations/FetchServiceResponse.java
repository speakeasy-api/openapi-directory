package openapisdk.models.operations;



public class FetchServiceResponse {
    public String contentType;
    public FetchServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2Service verifyV2Service;
    public FetchServiceResponse withVerifyV2Service(openapisdk.models.shared.VerifyV2Service verifyV2Service) {
        this.verifyV2Service = verifyV2Service;
        return this;
    }
}