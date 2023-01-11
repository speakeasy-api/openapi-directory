package openapisdk.models.operations;



public class CreateSyncListResponse {
    public String contentType;
    public CreateSyncListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncList syncV1ServiceSyncList;
    public CreateSyncListResponse withSyncV1ServiceSyncList(openapisdk.models.shared.SyncV1ServiceSyncList syncV1ServiceSyncList) {
        this.syncV1ServiceSyncList = syncV1ServiceSyncList;
        return this;
    }
}