package openapisdk.models.operations;



public class FetchSyncListItemResponse {
    public String contentType;
    public FetchSyncListItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncListItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem syncV1ServiceSyncListSyncListItem;
    public FetchSyncListItemResponse withSyncV1ServiceSyncListSyncListItem(openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem syncV1ServiceSyncListSyncListItem) {
        this.syncV1ServiceSyncListSyncListItem = syncV1ServiceSyncListSyncListItem;
        return this;
    }
}