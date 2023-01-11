package openapisdk.models.operations;



public class AnalyticsManagementCustomDimensionsListResponse {
    public String contentType;
    public AnalyticsManagementCustomDimensionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomDimensions customDimensions;
    public AnalyticsManagementCustomDimensionsListResponse withCustomDimensions(openapisdk.models.shared.CustomDimensions customDimensions) {
        this.customDimensions = customDimensions;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomDimensionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}