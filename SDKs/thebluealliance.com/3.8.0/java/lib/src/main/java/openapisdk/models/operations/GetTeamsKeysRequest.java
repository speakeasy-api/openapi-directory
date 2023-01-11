package openapisdk.models.operations;



public class GetTeamsKeysRequest {
    public GetTeamsKeysPathParams pathParams;
    public GetTeamsKeysRequest withPathParams(GetTeamsKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsKeysHeaders headers;
    public GetTeamsKeysRequest withHeaders(GetTeamsKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamsKeysSecurity security;
    public GetTeamsKeysRequest withSecurity(GetTeamsKeysSecurity security) {
        this.security = security;
        return this;
    }
}