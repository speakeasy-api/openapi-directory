package openapisdk.models.operations;



public class UpdateDefaultsResponse {
    public String contentType;
    public UpdateDefaultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDefaultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantDefaults autopilotV1AssistantDefaults;
    public UpdateDefaultsResponse withAutopilotV1AssistantDefaults(openapisdk.models.shared.AutopilotV1AssistantDefaults autopilotV1AssistantDefaults) {
        this.autopilotV1AssistantDefaults = autopilotV1AssistantDefaults;
        return this;
    }
}