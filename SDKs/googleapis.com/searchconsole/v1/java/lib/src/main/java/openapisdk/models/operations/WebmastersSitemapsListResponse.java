package openapisdk.models.operations;



public class WebmastersSitemapsListResponse {
    public String contentType;
    public WebmastersSitemapsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SitemapsListResponse sitemapsListResponse;
    public WebmastersSitemapsListResponse withSitemapsListResponse(openapisdk.models.shared.SitemapsListResponse sitemapsListResponse) {
        this.sitemapsListResponse = sitemapsListResponse;
        return this;
    }
    public Long statusCode;
    public WebmastersSitemapsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}