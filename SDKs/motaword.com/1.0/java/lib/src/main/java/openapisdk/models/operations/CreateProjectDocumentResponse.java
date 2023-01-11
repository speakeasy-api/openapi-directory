package openapisdk.models.operations;



public class CreateProjectDocumentResponse {
    public String contentType;
    public CreateProjectDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentList documentList;
    public CreateProjectDocumentResponse withDocumentList(openapisdk.models.shared.DocumentList documentList) {
        this.documentList = documentList;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateProjectDocumentResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CreateProjectDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}