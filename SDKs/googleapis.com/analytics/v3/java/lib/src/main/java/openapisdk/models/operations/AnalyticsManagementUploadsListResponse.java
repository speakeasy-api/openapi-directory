package openapisdk.models.operations;



public class AnalyticsManagementUploadsListResponse {
    public String contentType;
    public AnalyticsManagementUploadsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementUploadsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Uploads uploads;
    public AnalyticsManagementUploadsListResponse withUploads(openapisdk.models.shared.Uploads uploads) {
        this.uploads = uploads;
        return this;
    }
}