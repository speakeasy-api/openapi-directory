package openapisdk.models.operations;



public class AnalyticsManagementCustomDimensionsGetResponse {
    public String contentType;
    public AnalyticsManagementCustomDimensionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomDimension customDimension;
    public AnalyticsManagementCustomDimensionsGetResponse withCustomDimension(openapisdk.models.shared.CustomDimension customDimension) {
        this.customDimension = customDimension;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomDimensionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}