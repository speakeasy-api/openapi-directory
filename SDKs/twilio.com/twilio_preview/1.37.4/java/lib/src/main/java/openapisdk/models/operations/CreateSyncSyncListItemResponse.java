package openapisdk.models.operations;



public class CreateSyncSyncListItemResponse {
    public String contentType;
    public CreateSyncSyncListItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncSyncListItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem previewSyncServiceSyncListSyncListItem;
    public CreateSyncSyncListItemResponse withPreviewSyncServiceSyncListSyncListItem(openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem previewSyncServiceSyncListSyncListItem) {
        this.previewSyncServiceSyncListSyncListItem = previewSyncServiceSyncListSyncListItem;
        return this;
    }
}