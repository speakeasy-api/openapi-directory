package openapisdk.models.operations;



public class AnalyticsMetadataColumnsListResponse {
    public openapisdk.models.shared.Columns columns;
    public AnalyticsMetadataColumnsListResponse withColumns(openapisdk.models.shared.Columns columns) {
        this.columns = columns;
        return this;
    }
    public String contentType;
    public AnalyticsMetadataColumnsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsMetadataColumnsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}