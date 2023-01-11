package openapisdk.models.operations;



public class AnalyticsadminPropertiesGoogleAdsLinksListResponse {
    public String contentType;
    public AnalyticsadminPropertiesGoogleAdsLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse googleAnalyticsAdminV1betaListGoogleAdsLinksResponse;
    public AnalyticsadminPropertiesGoogleAdsLinksListResponse withGoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse googleAnalyticsAdminV1betaListGoogleAdsLinksResponse) {
        this.googleAnalyticsAdminV1betaListGoogleAdsLinksResponse = googleAnalyticsAdminV1betaListGoogleAdsLinksResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesGoogleAdsLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}