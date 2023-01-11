package openapisdk.models.operations;



public class GetConnectRequest {
    public GetConnectQueryParams queryParams;
    public GetConnectRequest withQueryParams(GetConnectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetConnectSecurity security;
    public GetConnectRequest withSecurity(GetConnectSecurity security) {
        this.security = security;
        return this;
    }
}