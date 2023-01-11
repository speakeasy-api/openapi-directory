package openapisdk.models.operations;



public class AdsenseAccountsReportsGetSavedResponse {
    public String contentType;
    public AdsenseAccountsReportsGetSavedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SavedReport savedReport;
    public AdsenseAccountsReportsGetSavedResponse withSavedReport(openapisdk.models.shared.SavedReport savedReport) {
        this.savedReport = savedReport;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsReportsGetSavedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}