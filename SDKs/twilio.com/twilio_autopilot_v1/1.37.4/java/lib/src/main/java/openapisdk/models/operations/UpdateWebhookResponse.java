package openapisdk.models.operations;



public class UpdateWebhookResponse {
    public String contentType;
    public UpdateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantWebhook autopilotV1AssistantWebhook;
    public UpdateWebhookResponse withAutopilotV1AssistantWebhook(openapisdk.models.shared.AutopilotV1AssistantWebhook autopilotV1AssistantWebhook) {
        this.autopilotV1AssistantWebhook = autopilotV1AssistantWebhook;
        return this;
    }
}