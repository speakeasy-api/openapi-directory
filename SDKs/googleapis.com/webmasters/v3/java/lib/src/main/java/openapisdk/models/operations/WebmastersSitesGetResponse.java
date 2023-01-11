package openapisdk.models.operations;



public class WebmastersSitesGetResponse {
    public String contentType;
    public WebmastersSitesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebmastersSitesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WmxSite wmxSite;
    public WebmastersSitesGetResponse withWmxSite(openapisdk.models.shared.WmxSite wmxSite) {
        this.wmxSite = wmxSite;
        return this;
    }
}