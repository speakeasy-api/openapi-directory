package openapisdk.models.operations;



public class CreateSyncSyncListResponse {
    public String contentType;
    public CreateSyncSyncListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncSyncListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncList previewSyncServiceSyncList;
    public CreateSyncSyncListResponse withPreviewSyncServiceSyncList(openapisdk.models.shared.PreviewSyncServiceSyncList previewSyncServiceSyncList) {
        this.previewSyncServiceSyncList = previewSyncServiceSyncList;
        return this;
    }
}