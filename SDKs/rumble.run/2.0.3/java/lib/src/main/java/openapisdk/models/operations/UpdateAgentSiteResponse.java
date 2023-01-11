package openapisdk.models.operations;



public class UpdateAgentSiteResponse {
    public openapisdk.models.shared.Agent agent;
    public UpdateAgentSiteResponse withAgent(openapisdk.models.shared.Agent agent) {
        this.agent = agent;
        return this;
    }
    public String contentType;
    public UpdateAgentSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAgentSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}