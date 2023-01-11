package openapisdk.models.operations;



public class GetDistrictTeamsSimpleRequest {
    public GetDistrictTeamsSimplePathParams pathParams;
    public GetDistrictTeamsSimpleRequest withPathParams(GetDistrictTeamsSimplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDistrictTeamsSimpleHeaders headers;
    public GetDistrictTeamsSimpleRequest withHeaders(GetDistrictTeamsSimpleHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetDistrictTeamsSimpleSecurity security;
    public GetDistrictTeamsSimpleRequest withSecurity(GetDistrictTeamsSimpleSecurity security) {
        this.security = security;
        return this;
    }
}