package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsScanRunsStopResponse {
    public String contentType;
    public WebsecurityscannerProjectsScanConfigsScanRunsStopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScanRun scanRun;
    public WebsecurityscannerProjectsScanConfigsScanRunsStopResponse withScanRun(openapisdk.models.shared.ScanRun scanRun) {
        this.scanRun = scanRun;
        return this;
    }
    public Long statusCode;
    public WebsecurityscannerProjectsScanConfigsScanRunsStopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}