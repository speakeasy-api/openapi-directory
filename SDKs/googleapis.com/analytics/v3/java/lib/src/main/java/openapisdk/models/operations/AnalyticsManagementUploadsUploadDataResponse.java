package openapisdk.models.operations;



public class AnalyticsManagementUploadsUploadDataResponse {
    public String contentType;
    public AnalyticsManagementUploadsUploadDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementUploadsUploadDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Upload upload;
    public AnalyticsManagementUploadsUploadDataResponse withUpload(openapisdk.models.shared.Upload upload) {
        this.upload = upload;
        return this;
    }
}