package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsStartResponse {
    public String contentType;
    public WebsecurityscannerProjectsScanConfigsStartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScanRun scanRun;
    public WebsecurityscannerProjectsScanConfigsStartResponse withScanRun(openapisdk.models.shared.ScanRun scanRun) {
        this.scanRun = scanRun;
        return this;
    }
    public Long statusCode;
    public WebsecurityscannerProjectsScanConfigsStartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}