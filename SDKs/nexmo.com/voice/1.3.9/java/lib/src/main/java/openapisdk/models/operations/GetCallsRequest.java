package openapisdk.models.operations;



public class GetCallsRequest {
    public GetCallsQueryParams queryParams;
    public GetCallsRequest withQueryParams(GetCallsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCallsSecurity security;
    public GetCallsRequest withSecurity(GetCallsSecurity security) {
        this.security = security;
        return this;
    }
}