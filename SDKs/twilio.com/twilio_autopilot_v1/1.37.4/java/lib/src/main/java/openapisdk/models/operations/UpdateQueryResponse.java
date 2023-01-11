package openapisdk.models.operations;



public class UpdateQueryResponse {
    public String contentType;
    public UpdateQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantQuery autopilotV1AssistantQuery;
    public UpdateQueryResponse withAutopilotV1AssistantQuery(openapisdk.models.shared.AutopilotV1AssistantQuery autopilotV1AssistantQuery) {
        this.autopilotV1AssistantQuery = autopilotV1AssistantQuery;
        return this;
    }
}