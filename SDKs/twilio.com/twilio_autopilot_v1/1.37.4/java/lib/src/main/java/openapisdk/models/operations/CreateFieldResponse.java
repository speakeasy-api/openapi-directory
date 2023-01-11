package openapisdk.models.operations;



public class CreateFieldResponse {
    public String contentType;
    public CreateFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTaskField autopilotV1AssistantTaskField;
    public CreateFieldResponse withAutopilotV1AssistantTaskField(openapisdk.models.shared.AutopilotV1AssistantTaskField autopilotV1AssistantTaskField) {
        this.autopilotV1AssistantTaskField = autopilotV1AssistantTaskField;
        return this;
    }
}