package openapisdk.models.operations;



public class AnalyticsManagementCustomDimensionsPatchResponse {
    public String contentType;
    public AnalyticsManagementCustomDimensionsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomDimension customDimension;
    public AnalyticsManagementCustomDimensionsPatchResponse withCustomDimension(openapisdk.models.shared.CustomDimension customDimension) {
        this.customDimension = customDimension;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomDimensionsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}