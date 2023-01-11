package openapisdk.models.operations;



public class GetTeamEventStatusRequest {
    public GetTeamEventStatusPathParams pathParams;
    public GetTeamEventStatusRequest withPathParams(GetTeamEventStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamEventStatusHeaders headers;
    public GetTeamEventStatusRequest withHeaders(GetTeamEventStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamEventStatusSecurity security;
    public GetTeamEventStatusRequest withSecurity(GetTeamEventStatusSecurity security) {
        this.security = security;
        return this;
    }
}