package openapisdk.models.operations;



public class GetAccountAgentsResponse {
    public openapisdk.models.shared.Agent[] agents;
    public GetAccountAgentsResponse withAgents(openapisdk.models.shared.Agent[] agents) {
        this.agents = agents;
        return this;
    }
    public String contentType;
    public GetAccountAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}