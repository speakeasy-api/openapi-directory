package openapisdk.models.operations;



public class EditAgentResponse {
    public openapisdk.models.shared.AgentResult agentResult;
    public EditAgentResponse withAgentResult(openapisdk.models.shared.AgentResult agentResult) {
        this.agentResult = agentResult;
        return this;
    }
    public String contentType;
    public EditAgentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditAgentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}