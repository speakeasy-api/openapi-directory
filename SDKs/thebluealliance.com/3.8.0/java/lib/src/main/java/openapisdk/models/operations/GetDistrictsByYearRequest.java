package openapisdk.models.operations;



public class GetDistrictsByYearRequest {
    public GetDistrictsByYearPathParams pathParams;
    public GetDistrictsByYearRequest withPathParams(GetDistrictsByYearPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDistrictsByYearHeaders headers;
    public GetDistrictsByYearRequest withHeaders(GetDistrictsByYearHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetDistrictsByYearSecurity security;
    public GetDistrictsByYearRequest withSecurity(GetDistrictsByYearSecurity security) {
        this.security = security;
        return this;
    }
}