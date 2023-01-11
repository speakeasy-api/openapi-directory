package openapisdk.models.operations;



public class EditAgentLocationResponse {
    public openapisdk.models.shared.AgentLocationResult agentLocationResult;
    public EditAgentLocationResponse withAgentLocationResult(openapisdk.models.shared.AgentLocationResult agentLocationResult) {
        this.agentLocationResult = agentLocationResult;
        return this;
    }
    public String contentType;
    public EditAgentLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditAgentLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}