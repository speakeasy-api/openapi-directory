package openapisdk.models.operations;



public class CreateWebhookResponse {
    public String contentType;
    public CreateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantWebhook autopilotV1AssistantWebhook;
    public CreateWebhookResponse withAutopilotV1AssistantWebhook(openapisdk.models.shared.AutopilotV1AssistantWebhook autopilotV1AssistantWebhook) {
        this.autopilotV1AssistantWebhook = autopilotV1AssistantWebhook;
        return this;
    }
}