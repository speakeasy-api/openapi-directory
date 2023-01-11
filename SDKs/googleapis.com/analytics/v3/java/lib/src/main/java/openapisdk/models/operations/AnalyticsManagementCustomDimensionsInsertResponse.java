package openapisdk.models.operations;



public class AnalyticsManagementCustomDimensionsInsertResponse {
    public String contentType;
    public AnalyticsManagementCustomDimensionsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomDimension customDimension;
    public AnalyticsManagementCustomDimensionsInsertResponse withCustomDimension(openapisdk.models.shared.CustomDimension customDimension) {
        this.customDimension = customDimension;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomDimensionsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}