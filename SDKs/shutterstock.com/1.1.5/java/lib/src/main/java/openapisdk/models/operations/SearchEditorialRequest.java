package openapisdk.models.operations;



public class SearchEditorialRequest {
    public SearchEditorialQueryParams queryParams;
    public SearchEditorialRequest withQueryParams(SearchEditorialQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchEditorialSecurity security;
    public SearchEditorialRequest withSecurity(SearchEditorialSecurity security) {
        this.security = security;
        return this;
    }
}