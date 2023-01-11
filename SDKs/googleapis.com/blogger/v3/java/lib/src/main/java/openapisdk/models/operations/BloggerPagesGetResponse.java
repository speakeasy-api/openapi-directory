package openapisdk.models.operations;



public class BloggerPagesGetResponse {
    public String contentType;
    public BloggerPagesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Page page;
    public BloggerPagesGetResponse withPage(openapisdk.models.shared.Page page) {
        this.page = page;
        return this;
    }
    public Long statusCode;
    public BloggerPagesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}