package openapisdk.models.operations;



public class BloggerCommentsMarkAsSpamRequest {
    public BloggerCommentsMarkAsSpamPathParams pathParams;
    public BloggerCommentsMarkAsSpamRequest withPathParams(BloggerCommentsMarkAsSpamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerCommentsMarkAsSpamQueryParams queryParams;
    public BloggerCommentsMarkAsSpamRequest withQueryParams(BloggerCommentsMarkAsSpamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BloggerCommentsMarkAsSpamSecurity security;
    public BloggerCommentsMarkAsSpamRequest withSecurity(BloggerCommentsMarkAsSpamSecurity security) {
        this.security = security;
        return this;
    }
}