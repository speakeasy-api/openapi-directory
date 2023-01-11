package openapisdk.models.operations;



public class AnalyticsadminPropertiesFirebaseLinksCreateResponse {
    public String contentType;
    public AnalyticsadminPropertiesFirebaseLinksCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaFirebaseLink googleAnalyticsAdminV1betaFirebaseLink;
    public AnalyticsadminPropertiesFirebaseLinksCreateResponse withGoogleAnalyticsAdminV1betaFirebaseLink(openapisdk.models.shared.GoogleAnalyticsAdminV1betaFirebaseLink googleAnalyticsAdminV1betaFirebaseLink) {
        this.googleAnalyticsAdminV1betaFirebaseLink = googleAnalyticsAdminV1betaFirebaseLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesFirebaseLinksCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}