package openapisdk.models.operations;



public class WebmastersSitemapsGetResponse {
    public String contentType;
    public WebmastersSitemapsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebmastersSitemapsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WmxSitemap wmxSitemap;
    public WebmastersSitemapsGetResponse withWmxSitemap(openapisdk.models.shared.WmxSitemap wmxSitemap) {
        this.wmxSitemap = wmxSitemap;
        return this;
    }
}