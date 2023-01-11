package openapisdk.models.operations;



public class PostQuoteTagsAddRequest {
    public PostQuoteTagsAddQueryParams queryParams;
    public PostQuoteTagsAddRequest withQueryParams(PostQuoteTagsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostQuoteTagsAddSecurity security;
    public PostQuoteTagsAddRequest withSecurity(PostQuoteTagsAddSecurity security) {
        this.security = security;
        return this;
    }
}