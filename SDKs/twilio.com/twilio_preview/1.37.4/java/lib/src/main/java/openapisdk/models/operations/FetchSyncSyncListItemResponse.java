package openapisdk.models.operations;



public class FetchSyncSyncListItemResponse {
    public String contentType;
    public FetchSyncSyncListItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncSyncListItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem previewSyncServiceSyncListSyncListItem;
    public FetchSyncSyncListItemResponse withPreviewSyncServiceSyncListSyncListItem(openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem previewSyncServiceSyncListSyncListItem) {
        this.previewSyncServiceSyncListSyncListItem = previewSyncServiceSyncListSyncListItem;
        return this;
    }
}