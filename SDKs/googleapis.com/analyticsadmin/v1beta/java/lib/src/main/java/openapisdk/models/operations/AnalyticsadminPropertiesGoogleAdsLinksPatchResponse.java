package openapisdk.models.operations;



public class AnalyticsadminPropertiesGoogleAdsLinksPatchResponse {
    public String contentType;
    public AnalyticsadminPropertiesGoogleAdsLinksPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLink googleAnalyticsAdminV1betaGoogleAdsLink;
    public AnalyticsadminPropertiesGoogleAdsLinksPatchResponse withGoogleAnalyticsAdminV1betaGoogleAdsLink(openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLink googleAnalyticsAdminV1betaGoogleAdsLink) {
        this.googleAnalyticsAdminV1betaGoogleAdsLink = googleAnalyticsAdminV1betaGoogleAdsLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesGoogleAdsLinksPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}