package openapisdk.models.operations;



public class ListSyncDocumentResponse {
    public String contentType;
    public ListSyncDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSyncDocumentListSyncDocumentResponse listSyncDocumentResponse;
    public ListSyncDocumentResponse withListSyncDocumentResponse(ListSyncDocumentListSyncDocumentResponse listSyncDocumentResponse) {
        this.listSyncDocumentResponse = listSyncDocumentResponse;
        return this;
    }
    public Long statusCode;
    public ListSyncDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}