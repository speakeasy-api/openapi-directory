package openapisdk.models.operations;



public class AdexchangebuyerAccountsGetResponse {
    public openapisdk.models.shared.Account account;
    public AdexchangebuyerAccountsGetResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public AdexchangebuyerAccountsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerAccountsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}