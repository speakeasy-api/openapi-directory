package openapisdk.models.operations;



public class FetchDefaultsResponse {
    public String contentType;
    public FetchDefaultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDefaultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantDefaults autopilotV1AssistantDefaults;
    public FetchDefaultsResponse withAutopilotV1AssistantDefaults(openapisdk.models.shared.AutopilotV1AssistantDefaults autopilotV1AssistantDefaults) {
        this.autopilotV1AssistantDefaults = autopilotV1AssistantDefaults;
        return this;
    }
}