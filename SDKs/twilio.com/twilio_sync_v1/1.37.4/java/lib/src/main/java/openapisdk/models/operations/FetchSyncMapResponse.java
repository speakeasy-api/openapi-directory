package openapisdk.models.operations;



public class FetchSyncMapResponse {
    public String contentType;
    public FetchSyncMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncMap syncV1ServiceSyncMap;
    public FetchSyncMapResponse withSyncV1ServiceSyncMap(openapisdk.models.shared.SyncV1ServiceSyncMap syncV1ServiceSyncMap) {
        this.syncV1ServiceSyncMap = syncV1ServiceSyncMap;
        return this;
    }
}