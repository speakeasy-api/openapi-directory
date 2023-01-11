package openapisdk.models.operations;



public class CreateAgentLocationResponse {
    public openapisdk.models.shared.AgentLocationResult agentLocationResult;
    public CreateAgentLocationResponse withAgentLocationResult(openapisdk.models.shared.AgentLocationResult agentLocationResult) {
        this.agentLocationResult = agentLocationResult;
        return this;
    }
    public String contentType;
    public CreateAgentLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAgentLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}