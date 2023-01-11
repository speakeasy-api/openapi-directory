package openapisdk.models.operations;



public class GetAgentResponse {
    public openapisdk.models.shared.Agent agent;
    public GetAgentResponse withAgent(openapisdk.models.shared.Agent agent) {
        this.agent = agent;
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