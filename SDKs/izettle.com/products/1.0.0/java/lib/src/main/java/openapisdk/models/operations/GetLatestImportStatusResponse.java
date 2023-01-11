package openapisdk.models.operations;



public class GetLatestImportStatusResponse {
    public String contentType;
    public GetLatestImportStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportResponse importResponse;
    public GetLatestImportStatusResponse withImportResponse(openapisdk.models.shared.ImportResponse importResponse) {
        this.importResponse = importResponse;
        return this;
    }
    public Long statusCode;
    public GetLatestImportStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}