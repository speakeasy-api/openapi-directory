package openapisdk.models.operations;



public class FetchWebhookResponse {
    public String contentType;
    public FetchWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantWebhook autopilotV1AssistantWebhook;
    public FetchWebhookResponse withAutopilotV1AssistantWebhook(openapisdk.models.shared.AutopilotV1AssistantWebhook autopilotV1AssistantWebhook) {
        this.autopilotV1AssistantWebhook = autopilotV1AssistantWebhook;
        return this;
    }
}