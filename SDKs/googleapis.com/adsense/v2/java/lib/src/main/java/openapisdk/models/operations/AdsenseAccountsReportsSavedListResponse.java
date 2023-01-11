package openapisdk.models.operations;



public class AdsenseAccountsReportsSavedListResponse {
    public String contentType;
    public AdsenseAccountsReportsSavedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSavedReportsResponse listSavedReportsResponse;
    public AdsenseAccountsReportsSavedListResponse withListSavedReportsResponse(openapisdk.models.shared.ListSavedReportsResponse listSavedReportsResponse) {
        this.listSavedReportsResponse = listSavedReportsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsReportsSavedListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}