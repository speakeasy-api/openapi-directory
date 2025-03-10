package openapisdk.models.operations;



public class GetTeamsByYearKeysRequest {
    public GetTeamsByYearKeysPathParams pathParams;
    public GetTeamsByYearKeysRequest withPathParams(GetTeamsByYearKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsByYearKeysHeaders headers;
    public GetTeamsByYearKeysRequest withHeaders(GetTeamsByYearKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamsByYearKeysSecurity security;
    public GetTeamsByYearKeysRequest withSecurity(GetTeamsByYearKeysSecurity security) {
        this.security = security;
        return this;
    }
}