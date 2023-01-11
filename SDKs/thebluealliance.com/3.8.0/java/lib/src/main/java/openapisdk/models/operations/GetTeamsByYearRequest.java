package openapisdk.models.operations;



public class GetTeamsByYearRequest {
    public GetTeamsByYearPathParams pathParams;
    public GetTeamsByYearRequest withPathParams(GetTeamsByYearPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsByYearHeaders headers;
    public GetTeamsByYearRequest withHeaders(GetTeamsByYearHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamsByYearSecurity security;
    public GetTeamsByYearRequest withSecurity(GetTeamsByYearSecurity security) {
        this.security = security;
        return this;
    }
}