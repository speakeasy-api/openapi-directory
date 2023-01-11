package openapisdk.models.operations;



public class CreateStreamMessageResponse {
    public String contentType;
    public CreateStreamMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateStreamMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncStreamStreamMessage syncV1ServiceSyncStreamStreamMessage;
    public CreateStreamMessageResponse withSyncV1ServiceSyncStreamStreamMessage(openapisdk.models.shared.SyncV1ServiceSyncStreamStreamMessage syncV1ServiceSyncStreamStreamMessage) {
        this.syncV1ServiceSyncStreamStreamMessage = syncV1ServiceSyncStreamStreamMessage;
        return this;
    }
}