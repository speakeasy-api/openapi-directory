package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsListResponse {
    public String contentType;
    public WebsecurityscannerProjectsScanConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListScanConfigsResponse listScanConfigsResponse;
    public WebsecurityscannerProjectsScanConfigsListResponse withListScanConfigsResponse(openapisdk.models.shared.ListScanConfigsResponse listScanConfigsResponse) {
        this.listScanConfigsResponse = listScanConfigsResponse;
        return this;
    }
    public Long statusCode;
    public WebsecurityscannerProjectsScanConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}