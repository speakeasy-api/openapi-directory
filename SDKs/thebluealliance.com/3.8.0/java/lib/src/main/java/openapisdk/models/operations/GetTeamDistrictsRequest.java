package openapisdk.models.operations;



public class GetTeamDistrictsRequest {
    public GetTeamDistrictsPathParams pathParams;
    public GetTeamDistrictsRequest withPathParams(GetTeamDistrictsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamDistrictsHeaders headers;
    public GetTeamDistrictsRequest withHeaders(GetTeamDistrictsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamDistrictsSecurity security;
    public GetTeamDistrictsRequest withSecurity(GetTeamDistrictsSecurity security) {
        this.security = security;
        return this;
    }
}