package openapisdk.models.operations;



public class CreateQueryResponse {
    public String contentType;
    public CreateQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantQuery autopilotV1AssistantQuery;
    public CreateQueryResponse withAutopilotV1AssistantQuery(openapisdk.models.shared.AutopilotV1AssistantQuery autopilotV1AssistantQuery) {
        this.autopilotV1AssistantQuery = autopilotV1AssistantQuery;
        return this;
    }
}