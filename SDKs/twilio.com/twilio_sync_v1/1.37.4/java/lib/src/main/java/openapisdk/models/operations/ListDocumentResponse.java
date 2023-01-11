package openapisdk.models.operations;



public class ListDocumentResponse {
    public String contentType;
    public ListDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListDocumentListDocumentResponse listDocumentResponse;
    public ListDocumentResponse withListDocumentResponse(ListDocumentListDocumentResponse listDocumentResponse) {
        this.listDocumentResponse = listDocumentResponse;
        return this;
    }
    public Long statusCode;
    public ListDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}