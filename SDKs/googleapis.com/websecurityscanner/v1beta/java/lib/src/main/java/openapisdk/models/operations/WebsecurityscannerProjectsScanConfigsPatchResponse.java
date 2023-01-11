package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsPatchResponse {
    public String contentType;
    public WebsecurityscannerProjectsScanConfigsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScanConfig scanConfig;
    public WebsecurityscannerProjectsScanConfigsPatchResponse withScanConfig(openapisdk.models.shared.ScanConfig scanConfig) {
        this.scanConfig = scanConfig;
        return this;
    }
    public Long statusCode;
    public WebsecurityscannerProjectsScanConfigsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}