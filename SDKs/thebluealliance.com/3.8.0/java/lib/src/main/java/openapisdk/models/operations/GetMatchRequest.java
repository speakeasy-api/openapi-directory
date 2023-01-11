package openapisdk.models.operations;



public class GetMatchRequest {
    public GetMatchPathParams pathParams;
    public GetMatchRequest withPathParams(GetMatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetMatchHeaders headers;
    public GetMatchRequest withHeaders(GetMatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetMatchSecurity security;
    public GetMatchRequest withSecurity(GetMatchSecurity security) {
        this.security = security;
        return this;
    }
}