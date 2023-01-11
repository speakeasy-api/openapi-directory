package openapisdk.models.operations;



public class GetClicksRequest {
    public GetClicksQueryParams queryParams;
    public GetClicksRequest withQueryParams(GetClicksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetClicksSecurity security;
    public GetClicksRequest withSecurity(GetClicksSecurity security) {
        this.security = security;
        return this;
    }
}