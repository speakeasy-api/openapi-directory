package openapisdk.models.operations;



public class CreateFieldValueResponse {
    public String contentType;
    public CreateFieldValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateFieldValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantFieldTypeFieldValue autopilotV1AssistantFieldTypeFieldValue;
    public CreateFieldValueResponse withAutopilotV1AssistantFieldTypeFieldValue(openapisdk.models.shared.AutopilotV1AssistantFieldTypeFieldValue autopilotV1AssistantFieldTypeFieldValue) {
        this.autopilotV1AssistantFieldTypeFieldValue = autopilotV1AssistantFieldTypeFieldValue;
        return this;
    }
}