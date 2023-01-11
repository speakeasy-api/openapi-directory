package openapisdk.models.operations;



public class RemoveAgentRequest {
    public RemoveAgentPathParams pathParams;
    public RemoveAgentRequest withPathParams(RemoveAgentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveAgentSecurity security;
    public RemoveAgentRequest withSecurity(RemoveAgentSecurity security) {
        this.security = security;
        return this;
    }
}