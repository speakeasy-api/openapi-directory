package openapisdk.models.operations;



public class GetResolveRequest {
    public GetResolveQueryParams queryParams;
    public GetResolveRequest withQueryParams(GetResolveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResolveSecurity security;
    public GetResolveRequest withSecurity(GetResolveSecurity security) {
        this.security = security;
        return this;
    }
}