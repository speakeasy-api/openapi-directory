package openapisdk.models.operations;



public class UpdateSyncSyncListItemResponse {
    public String contentType;
    public UpdateSyncSyncListItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncSyncListItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem previewSyncServiceSyncListSyncListItem;
    public UpdateSyncSyncListItemResponse withPreviewSyncServiceSyncListSyncListItem(openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem previewSyncServiceSyncListSyncListItem) {
        this.previewSyncServiceSyncListSyncListItem = previewSyncServiceSyncListSyncListItem;
        return this;
    }
}