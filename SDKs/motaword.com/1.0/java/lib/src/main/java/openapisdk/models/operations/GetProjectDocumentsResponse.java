package openapisdk.models.operations;



public class GetProjectDocumentsResponse {
    public String contentType;
    public GetProjectDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentList documentList;
    public GetProjectDocumentsResponse withDocumentList(openapisdk.models.shared.DocumentList documentList) {
        this.documentList = documentList;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetProjectDocumentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetProjectDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}