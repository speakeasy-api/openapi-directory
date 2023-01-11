package openapisdk.models.operations;



public class GetUserDocumentsResponse {
    public String contentType;
    public GetUserDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentList documentList;
    public GetUserDocumentsResponse withDocumentList(openapisdk.models.shared.DocumentList documentList) {
        this.documentList = documentList;
        return this;
    }
    public Long statusCode;
    public GetUserDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}