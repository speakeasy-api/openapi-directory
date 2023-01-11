package openapisdk.models.operations;



public class FetchDocumentResponse {
    public String contentType;
    public FetchDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceDocument syncV1ServiceDocument;
    public FetchDocumentResponse withSyncV1ServiceDocument(openapisdk.models.shared.SyncV1ServiceDocument syncV1ServiceDocument) {
        this.syncV1ServiceDocument = syncV1ServiceDocument;
        return this;
    }
}