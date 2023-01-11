package openapisdk.models.operations;



public class AdmobAccountsNetworkReportGenerateResponse {
    public String contentType;
    public AdmobAccountsNetworkReportGenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateNetworkReportResponse generateNetworkReportResponse;
    public AdmobAccountsNetworkReportGenerateResponse withGenerateNetworkReportResponse(openapisdk.models.shared.GenerateNetworkReportResponse generateNetworkReportResponse) {
        this.generateNetworkReportResponse = generateNetworkReportResponse;
        return this;
    }
    public Long statusCode;
    public AdmobAccountsNetworkReportGenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}