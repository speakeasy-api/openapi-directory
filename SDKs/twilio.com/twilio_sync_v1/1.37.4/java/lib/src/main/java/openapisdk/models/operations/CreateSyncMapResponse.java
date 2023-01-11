package openapisdk.models.operations;



public class CreateSyncMapResponse {
    public String contentType;
    public CreateSyncMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncMap syncV1ServiceSyncMap;
    public CreateSyncMapResponse withSyncV1ServiceSyncMap(openapisdk.models.shared.SyncV1ServiceSyncMap syncV1ServiceSyncMap) {
        this.syncV1ServiceSyncMap = syncV1ServiceSyncMap;
        return this;
    }
}