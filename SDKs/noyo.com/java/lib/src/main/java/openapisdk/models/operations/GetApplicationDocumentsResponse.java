package openapisdk.models.operations;



public class GetApplicationDocumentsResponse {
    public String contentType;
    public GetApplicationDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedApplicationDocumentResult paginatedApplicationDocumentResult;
    public GetApplicationDocumentsResponse withPaginatedApplicationDocumentResult(openapisdk.models.shared.PaginatedApplicationDocumentResult paginatedApplicationDocumentResult) {
        this.paginatedApplicationDocumentResult = paginatedApplicationDocumentResult;
        return this;
    }
    public Long statusCode;
    public GetApplicationDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}