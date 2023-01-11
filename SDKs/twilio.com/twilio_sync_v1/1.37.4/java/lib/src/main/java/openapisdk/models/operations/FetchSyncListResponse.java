package openapisdk.models.operations;



public class FetchSyncListResponse {
    public String contentType;
    public FetchSyncListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncList syncV1ServiceSyncList;
    public FetchSyncListResponse withSyncV1ServiceSyncList(openapisdk.models.shared.SyncV1ServiceSyncList syncV1ServiceSyncList) {
        this.syncV1ServiceSyncList = syncV1ServiceSyncList;
        return this;
    }
}