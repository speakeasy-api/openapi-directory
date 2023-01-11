package openapisdk.models.operations;



public class GetTeamEventsByYearKeysRequest {
    public GetTeamEventsByYearKeysPathParams pathParams;
    public GetTeamEventsByYearKeysRequest withPathParams(GetTeamEventsByYearKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamEventsByYearKeysHeaders headers;
    public GetTeamEventsByYearKeysRequest withHeaders(GetTeamEventsByYearKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamEventsByYearKeysSecurity security;
    public GetTeamEventsByYearKeysRequest withSecurity(GetTeamEventsByYearKeysSecurity security) {
        this.security = security;
        return this;
    }
}