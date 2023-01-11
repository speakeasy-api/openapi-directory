package openapisdk.models.operations;



public class GetLanguagePairsReportResponse {
    public String contentType;
    public GetLanguagePairsReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetLanguagePairsReportResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.LanguagePairsReport languagePairsReport;
    public GetLanguagePairsReportResponse withLanguagePairsReport(openapisdk.models.shared.LanguagePairsReport languagePairsReport) {
        this.languagePairsReport = languagePairsReport;
        return this;
    }
    public Long statusCode;
    public GetLanguagePairsReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}