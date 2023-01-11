package openapisdk.models.operations;



public class FetchSyncStreamResponse {
    public String contentType;
    public FetchSyncStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncStream syncV1ServiceSyncStream;
    public FetchSyncStreamResponse withSyncV1ServiceSyncStream(openapisdk.models.shared.SyncV1ServiceSyncStream syncV1ServiceSyncStream) {
        this.syncV1ServiceSyncStream = syncV1ServiceSyncStream;
        return this;
    }
}