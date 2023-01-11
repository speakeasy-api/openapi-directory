package openapisdk.models.operations;



public class DfareportingMobileAppsListResponse {
    public String contentType;
    public DfareportingMobileAppsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MobileAppsListResponse mobileAppsListResponse;
    public DfareportingMobileAppsListResponse withMobileAppsListResponse(openapisdk.models.shared.MobileAppsListResponse mobileAppsListResponse) {
        this.mobileAppsListResponse = mobileAppsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingMobileAppsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}