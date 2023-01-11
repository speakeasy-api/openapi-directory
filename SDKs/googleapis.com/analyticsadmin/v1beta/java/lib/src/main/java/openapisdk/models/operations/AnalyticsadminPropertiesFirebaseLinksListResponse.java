package openapisdk.models.operations;



public class AnalyticsadminPropertiesFirebaseLinksListResponse {
    public String contentType;
    public AnalyticsadminPropertiesFirebaseLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaListFirebaseLinksResponse googleAnalyticsAdminV1betaListFirebaseLinksResponse;
    public AnalyticsadminPropertiesFirebaseLinksListResponse withGoogleAnalyticsAdminV1betaListFirebaseLinksResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaListFirebaseLinksResponse googleAnalyticsAdminV1betaListFirebaseLinksResponse) {
        this.googleAnalyticsAdminV1betaListFirebaseLinksResponse = googleAnalyticsAdminV1betaListFirebaseLinksResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesFirebaseLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}