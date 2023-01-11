package openapisdk.models.operations;



public class CloudassetExportAssetsResponse {
    public String contentType;
    public CloudassetExportAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public CloudassetExportAssetsResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public CloudassetExportAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}