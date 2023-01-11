package openapisdk.models.operations;



public class GetTeamAwardsByYearRequest {
    public GetTeamAwardsByYearPathParams pathParams;
    public GetTeamAwardsByYearRequest withPathParams(GetTeamAwardsByYearPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamAwardsByYearHeaders headers;
    public GetTeamAwardsByYearRequest withHeaders(GetTeamAwardsByYearHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamAwardsByYearSecurity security;
    public GetTeamAwardsByYearRequest withSecurity(GetTeamAwardsByYearSecurity security) {
        this.security = security;
        return this;
    }
}