package openapisdk.models.operations;



public class UpdateServiceResponse {
    public String contentType;
    public UpdateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2Service verifyV2Service;
    public UpdateServiceResponse withVerifyV2Service(openapisdk.models.shared.VerifyV2Service verifyV2Service) {
        this.verifyV2Service = verifyV2Service;
        return this;
    }
}