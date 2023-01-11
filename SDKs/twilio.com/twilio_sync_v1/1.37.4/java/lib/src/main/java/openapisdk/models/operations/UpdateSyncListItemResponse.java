package openapisdk.models.operations;



public class UpdateSyncListItemResponse {
    public String contentType;
    public UpdateSyncListItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncListItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem syncV1ServiceSyncListSyncListItem;
    public UpdateSyncListItemResponse withSyncV1ServiceSyncListSyncListItem(openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem syncV1ServiceSyncListSyncListItem) {
        this.syncV1ServiceSyncListSyncListItem = syncV1ServiceSyncListSyncListItem;
        return this;
    }
}