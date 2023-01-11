package openapisdk.models.operations;



public class CreateSyncStreamResponse {
    public String contentType;
    public CreateSyncStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncStream syncV1ServiceSyncStream;
    public CreateSyncStreamResponse withSyncV1ServiceSyncStream(openapisdk.models.shared.SyncV1ServiceSyncStream syncV1ServiceSyncStream) {
        this.syncV1ServiceSyncStream = syncV1ServiceSyncStream;
        return this;
    }
}