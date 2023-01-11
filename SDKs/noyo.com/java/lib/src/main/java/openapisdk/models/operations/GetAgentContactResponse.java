package openapisdk.models.operations;



public class GetAgentContactResponse {
    public openapisdk.models.shared.AgentContactResult agentContactResult;
    public GetAgentContactResponse withAgentContactResult(openapisdk.models.shared.AgentContactResult agentContactResult) {
        this.agentContactResult = agentContactResult;
        return this;
    }
    public String contentType;
    public GetAgentContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAgentContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}