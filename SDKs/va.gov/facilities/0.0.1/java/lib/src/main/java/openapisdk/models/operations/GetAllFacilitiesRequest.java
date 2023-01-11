package openapisdk.models.operations;



public class GetAllFacilitiesRequest {
    public GetAllFacilitiesHeaders headers;
    public GetAllFacilitiesRequest withHeaders(GetAllFacilitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAllFacilitiesSecurity security;
    public GetAllFacilitiesRequest withSecurity(GetAllFacilitiesSecurity security) {
        this.security = security;
        return this;
    }
}