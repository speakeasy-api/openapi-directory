package openapisdk.models.operations;



public class ContentAccountsAuthinfoRequest {
    public ContentAccountsAuthinfoQueryParams queryParams;
    public ContentAccountsAuthinfoRequest withQueryParams(ContentAccountsAuthinfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentAccountsAuthinfoSecurity security;
    public ContentAccountsAuthinfoRequest withSecurity(ContentAccountsAuthinfoSecurity security) {
        this.security = security;
        return this;
    }
}