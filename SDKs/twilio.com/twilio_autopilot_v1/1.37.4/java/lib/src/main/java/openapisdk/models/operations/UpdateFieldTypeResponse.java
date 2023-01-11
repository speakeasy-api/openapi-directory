package openapisdk.models.operations;



public class UpdateFieldTypeResponse {
    public String contentType;
    public UpdateFieldTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateFieldTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantFieldType autopilotV1AssistantFieldType;
    public UpdateFieldTypeResponse withAutopilotV1AssistantFieldType(openapisdk.models.shared.AutopilotV1AssistantFieldType autopilotV1AssistantFieldType) {
        this.autopilotV1AssistantFieldType = autopilotV1AssistantFieldType;
        return this;
    }
}