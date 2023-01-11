package openapisdk.models.operations;



public class BloggerPagesInsertResponse {
    public String contentType;
    public BloggerPagesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Page page;
    public BloggerPagesInsertResponse withPage(openapisdk.models.shared.Page page) {
        this.page = page;
        return this;
    }
    public Long statusCode;
    public BloggerPagesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}