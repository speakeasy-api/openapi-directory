package openapisdk.models.operations;



public class RegisterSenderResponse {
    public String contentType;
    public RegisterSenderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegisterSenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RegisterEmailResponse registerEmailResponse;
    public RegisterSenderResponse withRegisterEmailResponse(openapisdk.models.shared.RegisterEmailResponse registerEmailResponse) {
        this.registerEmailResponse = registerEmailResponse;
        return this;
    }
}