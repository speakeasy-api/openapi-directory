package openapisdk.models.operations;



public class ListSupportingDocumentResponse {
    public String contentType;
    public ListSupportingDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSupportingDocumentListSupportingDocumentResponse listSupportingDocumentResponse;
    public ListSupportingDocumentResponse withListSupportingDocumentResponse(ListSupportingDocumentListSupportingDocumentResponse listSupportingDocumentResponse) {
        this.listSupportingDocumentResponse = listSupportingDocumentResponse;
        return this;
    }
    public Long statusCode;
    public ListSupportingDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}