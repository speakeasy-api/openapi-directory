package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsScanRunsListResponse {
    public String contentType;
    public WebsecurityscannerProjectsScanConfigsScanRunsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListScanRunsResponse listScanRunsResponse;
    public WebsecurityscannerProjectsScanConfigsScanRunsListResponse withListScanRunsResponse(openapisdk.models.shared.ListScanRunsResponse listScanRunsResponse) {
        this.listScanRunsResponse = listScanRunsResponse;
        return this;
    }
    public Long statusCode;
    public WebsecurityscannerProjectsScanConfigsScanRunsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}