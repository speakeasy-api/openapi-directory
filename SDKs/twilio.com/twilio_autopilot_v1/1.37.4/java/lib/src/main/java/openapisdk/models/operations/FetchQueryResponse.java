package openapisdk.models.operations;



public class FetchQueryResponse {
    public String contentType;
    public FetchQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantQuery autopilotV1AssistantQuery;
    public FetchQueryResponse withAutopilotV1AssistantQuery(openapisdk.models.shared.AutopilotV1AssistantQuery autopilotV1AssistantQuery) {
        this.autopilotV1AssistantQuery = autopilotV1AssistantQuery;
        return this;
    }
}