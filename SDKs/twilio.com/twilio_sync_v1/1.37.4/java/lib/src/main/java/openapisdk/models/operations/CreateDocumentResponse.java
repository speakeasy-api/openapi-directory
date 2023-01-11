package openapisdk.models.operations;



public class CreateDocumentResponse {
    public String contentType;
    public CreateDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceDocument syncV1ServiceDocument;
    public CreateDocumentResponse withSyncV1ServiceDocument(openapisdk.models.shared.SyncV1ServiceDocument syncV1ServiceDocument) {
        this.syncV1ServiceDocument = syncV1ServiceDocument;
        return this;
    }
}