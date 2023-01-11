package openapisdk.models.operations;



public class AdsenseAccountsReportsGenerateCsvResponse {
    public String contentType;
    public AdsenseAccountsReportsGenerateCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpBody httpBody;
    public AdsenseAccountsReportsGenerateCsvResponse withHttpBody(openapisdk.models.shared.HttpBody httpBody) {
        this.httpBody = httpBody;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsReportsGenerateCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}