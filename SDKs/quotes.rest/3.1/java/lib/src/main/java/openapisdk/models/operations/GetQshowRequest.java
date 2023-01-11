package openapisdk.models.operations;



public class GetQshowRequest {
    public GetQshowQueryParams queryParams;
    public GetQshowRequest withQueryParams(GetQshowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQshowSecurity security;
    public GetQshowRequest withSecurity(GetQshowSecurity security) {
        this.security = security;
        return this;
    }
}