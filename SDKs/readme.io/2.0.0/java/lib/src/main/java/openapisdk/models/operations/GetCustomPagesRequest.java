package openapisdk.models.operations;



public class GetCustomPagesRequest {
    public GetCustomPagesQueryParams queryParams;
    public GetCustomPagesRequest withQueryParams(GetCustomPagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCustomPagesSecurity security;
    public GetCustomPagesRequest withSecurity(GetCustomPagesSecurity security) {
        this.security = security;
        return this;
    }
}