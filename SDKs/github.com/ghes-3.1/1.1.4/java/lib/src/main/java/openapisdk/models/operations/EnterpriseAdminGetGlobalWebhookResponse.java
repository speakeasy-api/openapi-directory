package openapisdk.models.operations;



public class EnterpriseAdminGetGlobalWebhookResponse {
    public String contentType;
    public EnterpriseAdminGetGlobalWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetGlobalWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GlobalHook globalHook;
    public EnterpriseAdminGetGlobalWebhookResponse withGlobalHook(openapisdk.models.shared.GlobalHook globalHook) {
        this.globalHook = globalHook;
        return this;
    }
}