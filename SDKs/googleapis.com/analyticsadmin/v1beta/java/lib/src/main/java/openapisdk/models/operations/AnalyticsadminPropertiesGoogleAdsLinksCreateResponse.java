package openapisdk.models.operations;



public class AnalyticsadminPropertiesGoogleAdsLinksCreateResponse {
    public String contentType;
    public AnalyticsadminPropertiesGoogleAdsLinksCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLink googleAnalyticsAdminV1betaGoogleAdsLink;
    public AnalyticsadminPropertiesGoogleAdsLinksCreateResponse withGoogleAnalyticsAdminV1betaGoogleAdsLink(openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLink googleAnalyticsAdminV1betaGoogleAdsLink) {
        this.googleAnalyticsAdminV1betaGoogleAdsLink = googleAnalyticsAdminV1betaGoogleAdsLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesGoogleAdsLinksCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}