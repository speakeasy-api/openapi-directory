package openapisdk.models.operations;



public class GetTeamsByYearSimpleRequest {
    public GetTeamsByYearSimplePathParams pathParams;
    public GetTeamsByYearSimpleRequest withPathParams(GetTeamsByYearSimplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsByYearSimpleHeaders headers;
    public GetTeamsByYearSimpleRequest withHeaders(GetTeamsByYearSimpleHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamsByYearSimpleSecurity security;
    public GetTeamsByYearSimpleRequest withSecurity(GetTeamsByYearSimpleSecurity security) {
        this.security = security;
        return this;
    }
}