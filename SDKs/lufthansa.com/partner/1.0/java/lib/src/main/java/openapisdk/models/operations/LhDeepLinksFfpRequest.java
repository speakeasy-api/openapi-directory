package openapisdk.models.operations;



public class LhDeepLinksFfpRequest {
    public LhDeepLinksFfpQueryParams queryParams;
    public LhDeepLinksFfpRequest withQueryParams(LhDeepLinksFfpQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LhDeepLinksFfpHeaders headers;
    public LhDeepLinksFfpRequest withHeaders(LhDeepLinksFfpHeaders headers) {
        this.headers = headers;
        return this;
    }
    public LhDeepLinksFfpSecurity security;
    public LhDeepLinksFfpRequest withSecurity(LhDeepLinksFfpSecurity security) {
        this.security = security;
        return this;
    }
}