package openapisdk.models.operations;



public class GetTeamEventsByYearRequest {
    public GetTeamEventsByYearPathParams pathParams;
    public GetTeamEventsByYearRequest withPathParams(GetTeamEventsByYearPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamEventsByYearHeaders headers;
    public GetTeamEventsByYearRequest withHeaders(GetTeamEventsByYearHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamEventsByYearSecurity security;
    public GetTeamEventsByYearRequest withSecurity(GetTeamEventsByYearSecurity security) {
        this.security = security;
        return this;
    }
}