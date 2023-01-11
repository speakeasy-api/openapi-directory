package openapisdk.models.operations;



public class GetEventMatchesKeysRequest {
    public GetEventMatchesKeysPathParams pathParams;
    public GetEventMatchesKeysRequest withPathParams(GetEventMatchesKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventMatchesKeysHeaders headers;
    public GetEventMatchesKeysRequest withHeaders(GetEventMatchesKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventMatchesKeysSecurity security;
    public GetEventMatchesKeysRequest withSecurity(GetEventMatchesKeysSecurity security) {
        this.security = security;
        return this;
    }
}