package openapisdk.models.operations;



public class OsBrowsersRequest {
    public OsBrowsersQueryParams queryParams;
    public OsBrowsersRequest withQueryParams(OsBrowsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OsBrowsersSecurity security;
    public OsBrowsersRequest withSecurity(OsBrowsersSecurity security) {
        this.security = security;
        return this;
    }
}