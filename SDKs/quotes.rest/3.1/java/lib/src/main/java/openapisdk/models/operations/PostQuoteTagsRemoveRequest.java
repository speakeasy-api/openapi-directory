package openapisdk.models.operations;



public class PostQuoteTagsRemoveRequest {
    public PostQuoteTagsRemoveQueryParams queryParams;
    public PostQuoteTagsRemoveRequest withQueryParams(PostQuoteTagsRemoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostQuoteTagsRemoveSecurity security;
    public PostQuoteTagsRemoveRequest withSecurity(PostQuoteTagsRemoveSecurity security) {
        this.security = security;
        return this;
    }
}