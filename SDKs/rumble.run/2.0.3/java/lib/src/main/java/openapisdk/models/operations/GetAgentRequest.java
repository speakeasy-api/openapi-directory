package openapisdk.models.operations;



public class GetAgentRequest {
    public GetAgentPathParams pathParams;
    public GetAgentRequest withPathParams(GetAgentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAgentSecurity security;
    public GetAgentRequest withSecurity(GetAgentSecurity security) {
        this.security = security;
        return this;
    }
}