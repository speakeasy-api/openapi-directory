package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsCreateResponse {
    public String contentType;
    public WebsecurityscannerProjectsScanConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScanConfig scanConfig;
    public WebsecurityscannerProjectsScanConfigsCreateResponse withScanConfig(openapisdk.models.shared.ScanConfig scanConfig) {
        this.scanConfig = scanConfig;
        return this;
    }
    public Long statusCode;
    public WebsecurityscannerProjectsScanConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}