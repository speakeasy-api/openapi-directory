package openapisdk.models.operations;



public class AnalyticsManagementUploadsGetResponse {
    public String contentType;
    public AnalyticsManagementUploadsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementUploadsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Upload upload;
    public AnalyticsManagementUploadsGetResponse withUpload(openapisdk.models.shared.Upload upload) {
        this.upload = upload;
        return this;
    }
}