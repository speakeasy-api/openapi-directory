package openapisdk.models.operations;



public class FetchSyncSyncListResponse {
    public String contentType;
    public FetchSyncSyncListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncSyncListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncList previewSyncServiceSyncList;
    public FetchSyncSyncListResponse withPreviewSyncServiceSyncList(openapisdk.models.shared.PreviewSyncServiceSyncList previewSyncServiceSyncList) {
        this.previewSyncServiceSyncList = previewSyncServiceSyncList;
        return this;
    }
}