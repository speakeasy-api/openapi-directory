package openapisdk.models.operations;



public class FetchAssistantResponse {
    public String contentType;
    public FetchAssistantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAssistantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1Assistant autopilotV1Assistant;
    public FetchAssistantResponse withAutopilotV1Assistant(openapisdk.models.shared.AutopilotV1Assistant autopilotV1Assistant) {
        this.autopilotV1Assistant = autopilotV1Assistant;
        return this;
    }
}