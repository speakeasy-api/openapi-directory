package openapisdk.models.operations;



public class UpdateRestoreAssistantResponse {
    public String contentType;
    public UpdateRestoreAssistantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRestoreAssistantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1RestoreAssistant autopilotV1RestoreAssistant;
    public UpdateRestoreAssistantResponse withAutopilotV1RestoreAssistant(openapisdk.models.shared.AutopilotV1RestoreAssistant autopilotV1RestoreAssistant) {
        this.autopilotV1RestoreAssistant = autopilotV1RestoreAssistant;
        return this;
    }
}