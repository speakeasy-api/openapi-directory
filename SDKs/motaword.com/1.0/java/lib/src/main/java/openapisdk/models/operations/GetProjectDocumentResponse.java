package openapisdk.models.operations;



public class GetProjectDocumentResponse {
    public String contentType;
    public GetProjectDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Document document;
    public GetProjectDocumentResponse withDocument(openapisdk.models.shared.Document document) {
        this.document = document;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetProjectDocumentResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetProjectDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}