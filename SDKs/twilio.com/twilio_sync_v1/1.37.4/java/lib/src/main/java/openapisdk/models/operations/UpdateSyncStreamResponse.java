package openapisdk.models.operations;



public class UpdateSyncStreamResponse {
    public String contentType;
    public UpdateSyncStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncStream syncV1ServiceSyncStream;
    public UpdateSyncStreamResponse withSyncV1ServiceSyncStream(openapisdk.models.shared.SyncV1ServiceSyncStream syncV1ServiceSyncStream) {
        this.syncV1ServiceSyncStream = syncV1ServiceSyncStream;
        return this;
    }
}