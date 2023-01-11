package openapisdk.models.operations;



public class GetServicesRequest {
    public GetServicesQueryParams queryParams;
    public GetServicesRequest withQueryParams(GetServicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetServicesSecurity security;
    public GetServicesRequest withSecurity(GetServicesSecurity security) {
        this.security = security;
        return this;
    }
}