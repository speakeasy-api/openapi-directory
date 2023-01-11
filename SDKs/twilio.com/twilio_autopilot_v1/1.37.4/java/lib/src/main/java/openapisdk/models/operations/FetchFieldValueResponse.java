package openapisdk.models.operations;



public class FetchFieldValueResponse {
    public String contentType;
    public FetchFieldValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFieldValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantFieldTypeFieldValue autopilotV1AssistantFieldTypeFieldValue;
    public FetchFieldValueResponse withAutopilotV1AssistantFieldTypeFieldValue(openapisdk.models.shared.AutopilotV1AssistantFieldTypeFieldValue autopilotV1AssistantFieldTypeFieldValue) {
        this.autopilotV1AssistantFieldTypeFieldValue = autopilotV1AssistantFieldTypeFieldValue;
        return this;
    }
}