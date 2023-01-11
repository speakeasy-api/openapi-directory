package openapisdk.models.operations;



public class UpdateSyncListResponse {
    public String contentType;
    public UpdateSyncListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncList syncV1ServiceSyncList;
    public UpdateSyncListResponse withSyncV1ServiceSyncList(openapisdk.models.shared.SyncV1ServiceSyncList syncV1ServiceSyncList) {
        this.syncV1ServiceSyncList = syncV1ServiceSyncList;
        return this;
    }
}