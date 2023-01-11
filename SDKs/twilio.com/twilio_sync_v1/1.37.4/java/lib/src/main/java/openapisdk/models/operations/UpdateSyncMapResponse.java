package openapisdk.models.operations;



public class UpdateSyncMapResponse {
    public String contentType;
    public UpdateSyncMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncMap syncV1ServiceSyncMap;
    public UpdateSyncMapResponse withSyncV1ServiceSyncMap(openapisdk.models.shared.SyncV1ServiceSyncMap syncV1ServiceSyncMap) {
        this.syncV1ServiceSyncMap = syncV1ServiceSyncMap;
        return this;
    }
}