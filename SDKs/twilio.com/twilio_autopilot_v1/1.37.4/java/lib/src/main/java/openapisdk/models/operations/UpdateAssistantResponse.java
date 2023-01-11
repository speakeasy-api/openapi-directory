package openapisdk.models.operations;



public class UpdateAssistantResponse {
    public String contentType;
    public UpdateAssistantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAssistantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1Assistant autopilotV1Assistant;
    public UpdateAssistantResponse withAutopilotV1Assistant(openapisdk.models.shared.AutopilotV1Assistant autopilotV1Assistant) {
        this.autopilotV1Assistant = autopilotV1Assistant;
        return this;
    }
}