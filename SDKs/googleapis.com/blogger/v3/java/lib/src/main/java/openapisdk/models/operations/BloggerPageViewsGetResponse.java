package openapisdk.models.operations;



public class BloggerPageViewsGetResponse {
    public String contentType;
    public BloggerPageViewsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Pageviews pageviews;
    public BloggerPageViewsGetResponse withPageviews(openapisdk.models.shared.Pageviews pageviews) {
        this.pageviews = pageviews;
        return this;
    }
    public Long statusCode;
    public BloggerPageViewsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}