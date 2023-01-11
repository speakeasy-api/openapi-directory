package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse {
    public String contentType;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFindingTypeStatsResponse listFindingTypeStatsResponse;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse withListFindingTypeStatsResponse(openapisdk.models.shared.ListFindingTypeStatsResponse listFindingTypeStatsResponse) {
        this.listFindingTypeStatsResponse = listFindingTypeStatsResponse;
        return this;
    }
    public Long statusCode;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}