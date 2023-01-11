package openapisdk.models.operations;



public class GetTeamSimpleRequest {
    public GetTeamSimplePathParams pathParams;
    public GetTeamSimpleRequest withPathParams(GetTeamSimplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamSimpleHeaders headers;
    public GetTeamSimpleRequest withHeaders(GetTeamSimpleHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamSimpleSecurity security;
    public GetTeamSimpleRequest withSecurity(GetTeamSimpleSecurity security) {
        this.security = security;
        return this;
    }
}