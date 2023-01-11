package openapisdk.models.operations;



public class AdexchangebuyerAccountsUpdateResponse {
    public openapisdk.models.shared.Account account;
    public AdexchangebuyerAccountsUpdateResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public AdexchangebuyerAccountsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerAccountsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}