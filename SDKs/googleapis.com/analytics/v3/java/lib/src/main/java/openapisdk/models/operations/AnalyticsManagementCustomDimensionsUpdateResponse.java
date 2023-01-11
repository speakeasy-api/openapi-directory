package openapisdk.models.operations;



public class AnalyticsManagementCustomDimensionsUpdateResponse {
    public String contentType;
    public AnalyticsManagementCustomDimensionsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomDimension customDimension;
    public AnalyticsManagementCustomDimensionsUpdateResponse withCustomDimension(openapisdk.models.shared.CustomDimension customDimension) {
        this.customDimension = customDimension;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomDimensionsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}