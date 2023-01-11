package openapisdk.models.operations;



public class GetAgentResponse {
    public openapisdk.models.shared.AgentResult agentResult;
    public GetAgentResponse withAgentResult(openapisdk.models.shared.AgentResult agentResult) {
        this.agentResult = agentResult;
        return this;
    }
    public String contentType;
    public GetAgentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAgentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}