package openapisdk.models.operations;



public class AdmobAccountsMediationReportGenerateResponse {
    public String contentType;
    public AdmobAccountsMediationReportGenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateMediationReportResponse generateMediationReportResponse;
    public AdmobAccountsMediationReportGenerateResponse withGenerateMediationReportResponse(openapisdk.models.shared.GenerateMediationReportResponse generateMediationReportResponse) {
        this.generateMediationReportResponse = generateMediationReportResponse;
        return this;
    }
    public Long statusCode;
    public AdmobAccountsMediationReportGenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}