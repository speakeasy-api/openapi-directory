package openapisdk.models.operations;



public class GetTeamMatchesByYearRequest {
    public GetTeamMatchesByYearPathParams pathParams;
    public GetTeamMatchesByYearRequest withPathParams(GetTeamMatchesByYearPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamMatchesByYearHeaders headers;
    public GetTeamMatchesByYearRequest withHeaders(GetTeamMatchesByYearHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamMatchesByYearSecurity security;
    public GetTeamMatchesByYearRequest withSecurity(GetTeamMatchesByYearSecurity security) {
        this.security = security;
        return this;
    }
}