package openapisdk.models.operations;



public class FetchRendersRequest {
    public FetchRendersQueryParams queryParams;
    public FetchRendersRequest withQueryParams(FetchRendersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchRendersSecurity security;
    public FetchRendersRequest withSecurity(FetchRendersSecurity security) {
        this.security = security;
        return this;
    }
}