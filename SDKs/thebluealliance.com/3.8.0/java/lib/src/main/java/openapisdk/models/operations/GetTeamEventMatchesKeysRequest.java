package openapisdk.models.operations;



public class GetTeamEventMatchesKeysRequest {
    public GetTeamEventMatchesKeysPathParams pathParams;
    public GetTeamEventMatchesKeysRequest withPathParams(GetTeamEventMatchesKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamEventMatchesKeysHeaders headers;
    public GetTeamEventMatchesKeysRequest withHeaders(GetTeamEventMatchesKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamEventMatchesKeysSecurity security;
    public GetTeamEventMatchesKeysRequest withSecurity(GetTeamEventMatchesKeysSecurity security) {
        this.security = security;
        return this;
    }
}