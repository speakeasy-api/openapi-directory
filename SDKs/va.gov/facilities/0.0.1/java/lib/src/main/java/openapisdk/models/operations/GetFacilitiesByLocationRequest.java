package openapisdk.models.operations;



public class GetFacilitiesByLocationRequest {
    public GetFacilitiesByLocationQueryParams queryParams;
    public GetFacilitiesByLocationRequest withQueryParams(GetFacilitiesByLocationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFacilitiesByLocationSecurity security;
    public GetFacilitiesByLocationRequest withSecurity(GetFacilitiesByLocationSecurity security) {
        this.security = security;
        return this;
    }
}