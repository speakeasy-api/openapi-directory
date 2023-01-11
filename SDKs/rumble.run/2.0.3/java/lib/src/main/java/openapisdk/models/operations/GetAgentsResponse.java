package openapisdk.models.operations;



public class GetAgentsResponse {
    public openapisdk.models.shared.Agent[] agents;
    public GetAgentsResponse withAgents(openapisdk.models.shared.Agent[] agents) {
        this.agents = agents;
        return this;
    }
    public String contentType;
    public GetAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}