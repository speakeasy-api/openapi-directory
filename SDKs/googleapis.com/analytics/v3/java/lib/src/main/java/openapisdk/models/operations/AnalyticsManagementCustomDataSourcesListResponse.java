package openapisdk.models.operations;



public class AnalyticsManagementCustomDataSourcesListResponse {
    public String contentType;
    public AnalyticsManagementCustomDataSourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomDataSources customDataSources;
    public AnalyticsManagementCustomDataSourcesListResponse withCustomDataSources(openapisdk.models.shared.CustomDataSources customDataSources) {
        this.customDataSources = customDataSources;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomDataSourcesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}