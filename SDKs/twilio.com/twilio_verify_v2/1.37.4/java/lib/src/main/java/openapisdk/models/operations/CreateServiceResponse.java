package openapisdk.models.operations;



public class CreateServiceResponse {
    public String contentType;
    public CreateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2Service verifyV2Service;
    public CreateServiceResponse withVerifyV2Service(openapisdk.models.shared.VerifyV2Service verifyV2Service) {
        this.verifyV2Service = verifyV2Service;
        return this;
    }
}