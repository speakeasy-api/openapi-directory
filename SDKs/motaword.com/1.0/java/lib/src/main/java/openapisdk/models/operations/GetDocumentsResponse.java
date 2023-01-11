package openapisdk.models.operations;



public class GetDocumentsResponse {
    public String contentType;
    public GetDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentList documentList;
    public GetDocumentsResponse withDocumentList(openapisdk.models.shared.DocumentList documentList) {
        this.documentList = documentList;
        return this;
    }
    public Long statusCode;
    public GetDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}