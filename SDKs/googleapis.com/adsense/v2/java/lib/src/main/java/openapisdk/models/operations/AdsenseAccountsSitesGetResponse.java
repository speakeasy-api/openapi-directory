package openapisdk.models.operations;



public class AdsenseAccountsSitesGetResponse {
    public String contentType;
    public AdsenseAccountsSitesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Site site;
    public AdsenseAccountsSitesGetResponse withSite(openapisdk.models.shared.Site site) {
        this.site = site;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsSitesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}