package openapisdk.models.operations;



public class CreateSyncListItemResponse {
    public String contentType;
    public CreateSyncListItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncListItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem syncV1ServiceSyncListSyncListItem;
    public CreateSyncListItemResponse withSyncV1ServiceSyncListSyncListItem(openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem syncV1ServiceSyncListSyncListItem) {
        this.syncV1ServiceSyncListSyncListItem = syncV1ServiceSyncListSyncListItem;
        return this;
    }
}