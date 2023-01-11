package openapisdk.models.operations;



public class ImportLibraryV2Response {
    public String contentType;
    public ImportLibraryV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public ImportLibraryV2Response withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.ImportResponse importResponse;
    public ImportLibraryV2Response withImportResponse(openapisdk.models.shared.ImportResponse importResponse) {
        this.importResponse = importResponse;
        return this;
    }
    public Long statusCode;
    public ImportLibraryV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}