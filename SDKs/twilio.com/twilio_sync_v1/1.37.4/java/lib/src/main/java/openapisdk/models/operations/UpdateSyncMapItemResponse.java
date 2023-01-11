package openapisdk.models.operations;



public class UpdateSyncMapItemResponse {
    public String contentType;
    public UpdateSyncMapItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncMapItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem syncV1ServiceSyncMapSyncMapItem;
    public UpdateSyncMapItemResponse withSyncV1ServiceSyncMapSyncMapItem(openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem syncV1ServiceSyncMapSyncMapItem) {
        this.syncV1ServiceSyncMapSyncMapItem = syncV1ServiceSyncMapSyncMapItem;
        return this;
    }
}