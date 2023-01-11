package openapisdk.models.operations;



public class FetchFieldTypeResponse {
    public String contentType;
    public FetchFieldTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFieldTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantFieldType autopilotV1AssistantFieldType;
    public FetchFieldTypeResponse withAutopilotV1AssistantFieldType(openapisdk.models.shared.AutopilotV1AssistantFieldType autopilotV1AssistantFieldType) {
        this.autopilotV1AssistantFieldType = autopilotV1AssistantFieldType;
        return this;
    }
}