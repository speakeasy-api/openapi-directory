package openapisdk.models.operations;



public class CreateAssistantResponse {
    public String contentType;
    public CreateAssistantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAssistantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1Assistant autopilotV1Assistant;
    public CreateAssistantResponse withAutopilotV1Assistant(openapisdk.models.shared.AutopilotV1Assistant autopilotV1Assistant) {
        this.autopilotV1Assistant = autopilotV1Assistant;
        return this;
    }
}