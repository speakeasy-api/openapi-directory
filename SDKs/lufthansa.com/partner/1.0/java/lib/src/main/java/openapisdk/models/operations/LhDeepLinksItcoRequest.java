package openapisdk.models.operations;



public class LhDeepLinksItcoRequest {
    public LhDeepLinksItcoQueryParams queryParams;
    public LhDeepLinksItcoRequest withQueryParams(LhDeepLinksItcoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LhDeepLinksItcoHeaders headers;
    public LhDeepLinksItcoRequest withHeaders(LhDeepLinksItcoHeaders headers) {
        this.headers = headers;
        return this;
    }
    public LhDeepLinksItcoSecurity security;
    public LhDeepLinksItcoRequest withSecurity(LhDeepLinksItcoSecurity security) {
        this.security = security;
        return this;
    }
}