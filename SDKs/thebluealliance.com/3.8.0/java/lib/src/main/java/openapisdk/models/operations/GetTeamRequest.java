package openapisdk.models.operations;



public class GetTeamRequest {
    public GetTeamPathParams pathParams;
    public GetTeamRequest withPathParams(GetTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamHeaders headers;
    public GetTeamRequest withHeaders(GetTeamHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamSecurity security;
    public GetTeamRequest withSecurity(GetTeamSecurity security) {
        this.security = security;
        return this;
    }
}