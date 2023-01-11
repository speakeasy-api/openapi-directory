package openapisdk.models.operations;



public class GetFacilityIdsRequest {
    public GetFacilityIdsQueryParams queryParams;
    public GetFacilityIdsRequest withQueryParams(GetFacilityIdsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFacilityIdsSecurity security;
    public GetFacilityIdsRequest withSecurity(GetFacilityIdsSecurity security) {
        this.security = security;
        return this;
    }
}