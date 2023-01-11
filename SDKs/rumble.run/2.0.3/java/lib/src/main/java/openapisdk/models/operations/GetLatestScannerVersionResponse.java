package openapisdk.models.operations;



public class GetLatestScannerVersionResponse {
    public openapisdk.models.shared.ComponentVersion componentVersion;
    public GetLatestScannerVersionResponse withComponentVersion(openapisdk.models.shared.ComponentVersion componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    public String contentType;
    public GetLatestScannerVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLatestScannerVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}