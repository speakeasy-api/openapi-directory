package openapisdk.models.operations;



public class BloggerPagesUpdateResponse {
    public String contentType;
    public BloggerPagesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Page page;
    public BloggerPagesUpdateResponse withPage(openapisdk.models.shared.Page page) {
        this.page = page;
        return this;
    }
    public Long statusCode;
    public BloggerPagesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}