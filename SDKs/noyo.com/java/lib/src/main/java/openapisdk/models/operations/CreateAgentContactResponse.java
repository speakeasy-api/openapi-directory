package openapisdk.models.operations;



public class CreateAgentContactResponse {
    public openapisdk.models.shared.AgentContactResult agentContactResult;
    public CreateAgentContactResponse withAgentContactResult(openapisdk.models.shared.AgentContactResult agentContactResult) {
        this.agentContactResult = agentContactResult;
        return this;
    }
    public String contentType;
    public CreateAgentContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAgentContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}