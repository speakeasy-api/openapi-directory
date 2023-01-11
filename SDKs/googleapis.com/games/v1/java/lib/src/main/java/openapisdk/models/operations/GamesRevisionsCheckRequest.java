package openapisdk.models.operations;



public class GamesRevisionsCheckRequest {
    public GamesRevisionsCheckQueryParams queryParams;
    public GamesRevisionsCheckRequest withQueryParams(GamesRevisionsCheckQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesRevisionsCheckSecurity security;
    public GamesRevisionsCheckRequest withSecurity(GamesRevisionsCheckSecurity security) {
        this.security = security;
        return this;
    }
}