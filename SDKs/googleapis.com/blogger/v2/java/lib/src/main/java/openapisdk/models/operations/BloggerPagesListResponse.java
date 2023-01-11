package openapisdk.models.operations;



public class BloggerPagesListResponse {
    public String contentType;
    public BloggerPagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PageList pageList;
    public BloggerPagesListResponse withPageList(openapisdk.models.shared.PageList pageList) {
        this.pageList = pageList;
        return this;
    }
    public Long statusCode;
    public BloggerPagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}