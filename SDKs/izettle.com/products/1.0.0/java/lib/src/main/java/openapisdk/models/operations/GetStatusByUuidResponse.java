package openapisdk.models.operations;



public class GetStatusByUuidResponse {
    public String contentType;
    public GetStatusByUuidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportResponse importResponse;
    public GetStatusByUuidResponse withImportResponse(openapisdk.models.shared.ImportResponse importResponse) {
        this.importResponse = importResponse;
        return this;
    }
    public Long statusCode;
    public GetStatusByUuidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}