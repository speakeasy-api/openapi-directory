package openapisdk.models.operations;



public class UpdateDocumentResponse {
    public String contentType;
    public UpdateDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceDocument syncV1ServiceDocument;
    public UpdateDocumentResponse withSyncV1ServiceDocument(openapisdk.models.shared.SyncV1ServiceDocument syncV1ServiceDocument) {
        this.syncV1ServiceDocument = syncV1ServiceDocument;
        return this;
    }
}