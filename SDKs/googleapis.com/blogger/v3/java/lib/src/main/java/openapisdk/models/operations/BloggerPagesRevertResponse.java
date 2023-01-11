package openapisdk.models.operations;



public class BloggerPagesRevertResponse {
    public String contentType;
    public BloggerPagesRevertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Page page;
    public BloggerPagesRevertResponse withPage(openapisdk.models.shared.Page page) {
        this.page = page;
        return this;
    }
    public Long statusCode;
    public BloggerPagesRevertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}