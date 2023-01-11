package openapisdk.models.operations;



public class CreateApplicationAgentResponse {
    public openapisdk.models.shared.AgentResult agentResult;
    public CreateApplicationAgentResponse withAgentResult(openapisdk.models.shared.AgentResult agentResult) {
        this.agentResult = agentResult;
        return this;
    }
    public String contentType;
    public CreateApplicationAgentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateApplicationAgentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}