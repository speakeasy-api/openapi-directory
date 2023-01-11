package openapisdk.models.operations;



public class GetTeamEventMatchesRequest {
    public GetTeamEventMatchesPathParams pathParams;
    public GetTeamEventMatchesRequest withPathParams(GetTeamEventMatchesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamEventMatchesHeaders headers;
    public GetTeamEventMatchesRequest withHeaders(GetTeamEventMatchesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamEventMatchesSecurity security;
    public GetTeamEventMatchesRequest withSecurity(GetTeamEventMatchesSecurity security) {
        this.security = security;
        return this;
    }
}