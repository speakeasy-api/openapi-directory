package openapisdk.models.operations;



public class DfareportingMobileAppsGetResponse {
    public String contentType;
    public DfareportingMobileAppsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MobileApp mobileApp;
    public DfareportingMobileAppsGetResponse withMobileApp(openapisdk.models.shared.MobileApp mobileApp) {
        this.mobileApp = mobileApp;
        return this;
    }
    public Long statusCode;
    public DfareportingMobileAppsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}