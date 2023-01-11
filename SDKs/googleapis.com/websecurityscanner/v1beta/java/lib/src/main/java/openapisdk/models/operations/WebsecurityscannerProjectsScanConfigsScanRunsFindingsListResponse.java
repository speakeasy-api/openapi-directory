package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse {
    public String contentType;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFindingsResponse listFindingsResponse;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse withListFindingsResponse(openapisdk.models.shared.ListFindingsResponse listFindingsResponse) {
        this.listFindingsResponse = listFindingsResponse;
        return this;
    }
    public Long statusCode;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}