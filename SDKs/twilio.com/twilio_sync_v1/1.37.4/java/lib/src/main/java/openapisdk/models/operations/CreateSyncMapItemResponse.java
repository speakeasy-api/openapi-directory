package openapisdk.models.operations;



public class CreateSyncMapItemResponse {
    public String contentType;
    public CreateSyncMapItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncMapItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem syncV1ServiceSyncMapSyncMapItem;
    public CreateSyncMapItemResponse withSyncV1ServiceSyncMapSyncMapItem(openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem syncV1ServiceSyncMapSyncMapItem) {
        this.syncV1ServiceSyncMapSyncMapItem = syncV1ServiceSyncMapSyncMapItem;
        return this;
    }
}