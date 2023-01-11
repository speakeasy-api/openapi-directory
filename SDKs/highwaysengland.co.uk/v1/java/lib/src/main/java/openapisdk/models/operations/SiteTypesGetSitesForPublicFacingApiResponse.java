package openapisdk.models.operations;



public class SiteTypesGetSitesForPublicFacingApiResponse {
    public String contentType;
    public SiteTypesGetSitesForPublicFacingApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteTypeLayer siteTypeLayer;
    public SiteTypesGetSitesForPublicFacingApiResponse withSiteTypeLayer(openapisdk.models.shared.SiteTypeLayer siteTypeLayer) {
        this.siteTypeLayer = siteTypeLayer;
        return this;
    }
    public Long statusCode;
    public SiteTypesGetSitesForPublicFacingApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}