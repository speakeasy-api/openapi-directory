package openapisdk.models.operations;



public class SearchDocsRequest {
    public SearchDocsQueryParams queryParams;
    public SearchDocsRequest withQueryParams(SearchDocsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchDocsHeaders headers;
    public SearchDocsRequest withHeaders(SearchDocsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public SearchDocsSecurity security;
    public SearchDocsRequest withSecurity(SearchDocsSecurity security) {
        this.security = security;
        return this;
    }
}