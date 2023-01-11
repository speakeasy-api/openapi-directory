package openapisdk.models.operations;



public class AdsenseAccountsReportsSavedGenerateCsvResponse {
    public String contentType;
    public AdsenseAccountsReportsSavedGenerateCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpBody httpBody;
    public AdsenseAccountsReportsSavedGenerateCsvResponse withHttpBody(openapisdk.models.shared.HttpBody httpBody) {
        this.httpBody = httpBody;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsReportsSavedGenerateCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}