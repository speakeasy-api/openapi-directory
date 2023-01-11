package openapisdk.models.operations;



public class GetSimilarDocumentsResponse {
    public String contentType;
    public GetSimilarDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentList documentList;
    public GetSimilarDocumentsResponse withDocumentList(openapisdk.models.shared.DocumentList documentList) {
        this.documentList = documentList;
        return this;
    }
    public Long statusCode;
    public GetSimilarDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}