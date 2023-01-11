package openapisdk.models.operations;



public class FetchSyncMapItemResponse {
    public String contentType;
    public FetchSyncMapItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncMapItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem syncV1ServiceSyncMapSyncMapItem;
    public FetchSyncMapItemResponse withSyncV1ServiceSyncMapSyncMapItem(openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem syncV1ServiceSyncMapSyncMapItem) {
        this.syncV1ServiceSyncMapSyncMapItem = syncV1ServiceSyncMapSyncMapItem;
        return this;
    }
}