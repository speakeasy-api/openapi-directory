package openapisdk.models.operations;



public class CreateFieldTypeResponse {
    public String contentType;
    public CreateFieldTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateFieldTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantFieldType autopilotV1AssistantFieldType;
    public CreateFieldTypeResponse withAutopilotV1AssistantFieldType(openapisdk.models.shared.AutopilotV1AssistantFieldType autopilotV1AssistantFieldType) {
        this.autopilotV1AssistantFieldType = autopilotV1AssistantFieldType;
        return this;
    }
}