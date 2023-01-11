package openapisdk.models.operations;



public class FetchFieldResponse {
    public String contentType;
    public FetchFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTaskField autopilotV1AssistantTaskField;
    public FetchFieldResponse withAutopilotV1AssistantTaskField(openapisdk.models.shared.AutopilotV1AssistantTaskField autopilotV1AssistantTaskField) {
        this.autopilotV1AssistantTaskField = autopilotV1AssistantTaskField;
        return this;
    }
}