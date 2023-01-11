package openapisdk.models.operations;



public class SitesIndexResponse {
    public String contentType;
    public SitesIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteResponse siteResponse;
    public SitesIndexResponse withSiteResponse(openapisdk.models.shared.SiteResponse siteResponse) {
        this.siteResponse = siteResponse;
        return this;
    }
    public Long statusCode;
    public SitesIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}