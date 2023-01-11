package openapisdk.models.operations;



public class UpdateProjectDocumentResponse {
    public String contentType;
    public UpdateProjectDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Document document;
    public UpdateProjectDocumentResponse withDocument(openapisdk.models.shared.Document document) {
        this.document = document;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateProjectDocumentResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateProjectDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}