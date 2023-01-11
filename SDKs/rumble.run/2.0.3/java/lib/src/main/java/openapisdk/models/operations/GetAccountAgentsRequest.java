package openapisdk.models.operations;



public class GetAccountAgentsRequest {
    public GetAccountAgentsQueryParams queryParams;
    public GetAccountAgentsRequest withQueryParams(GetAccountAgentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAccountAgentsSecurity security;
    public GetAccountAgentsRequest withSecurity(GetAccountAgentsSecurity security) {
        this.security = security;
        return this;
    }
}