package openapisdk.models.operations;



public class EnterpriseAdminUpdatePreReceiveHookResponse {
    public String contentType;
    public EnterpriseAdminUpdatePreReceiveHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminUpdatePreReceiveHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreReceiveHook preReceiveHook;
    public EnterpriseAdminUpdatePreReceiveHookResponse withPreReceiveHook(openapisdk.models.shared.PreReceiveHook preReceiveHook) {
        this.preReceiveHook = preReceiveHook;
        return this;
    }
}