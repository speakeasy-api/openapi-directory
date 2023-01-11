package openapisdk.models.operations;



public class ListDocumentPermissionResponse {
    public String contentType;
    public ListDocumentPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListDocumentPermissionListDocumentPermissionResponse listDocumentPermissionResponse;
    public ListDocumentPermissionResponse withListDocumentPermissionResponse(ListDocumentPermissionListDocumentPermissionResponse listDocumentPermissionResponse) {
        this.listDocumentPermissionResponse = listDocumentPermissionResponse;
        return this;
    }
    public Long statusCode;
    public ListDocumentPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}