package openapisdk.models.operations;



public class GetAgentLocationResponse {
    public openapisdk.models.shared.AgentLocationResult agentLocationResult;
    public GetAgentLocationResponse withAgentLocationResult(openapisdk.models.shared.AgentLocationResult agentLocationResult) {
        this.agentLocationResult = agentLocationResult;
        return this;
    }
    public String contentType;
    public GetAgentLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAgentLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}