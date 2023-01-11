package openapisdk.models.operations;



public class GetDistrictTeamsRequest {
    public GetDistrictTeamsPathParams pathParams;
    public GetDistrictTeamsRequest withPathParams(GetDistrictTeamsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDistrictTeamsHeaders headers;
    public GetDistrictTeamsRequest withHeaders(GetDistrictTeamsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetDistrictTeamsSecurity security;
    public GetDistrictTeamsRequest withSecurity(GetDistrictTeamsSecurity security) {
        this.security = security;
        return this;
    }
}