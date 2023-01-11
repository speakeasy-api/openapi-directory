package openapisdk.models.operations;



public class EditAgentContactResponse {
    public openapisdk.models.shared.AgentContactResult agentContactResult;
    public EditAgentContactResponse withAgentContactResult(openapisdk.models.shared.AgentContactResult agentContactResult) {
        this.agentContactResult = agentContactResult;
        return this;
    }
    public String contentType;
    public EditAgentContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditAgentContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}