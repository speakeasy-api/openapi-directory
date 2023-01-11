package openapisdk.models.operations;



public class GetNearbyFacilitiesRequest {
    public GetNearbyFacilitiesQueryParams queryParams;
    public GetNearbyFacilitiesRequest withQueryParams(GetNearbyFacilitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNearbyFacilitiesSecurity security;
    public GetNearbyFacilitiesRequest withSecurity(GetNearbyFacilitiesSecurity security) {
        this.security = security;
        return this;
    }
}