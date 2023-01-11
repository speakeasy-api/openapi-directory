package openapisdk.models.operations;



public class DfareportingAccountsGetResponse {
    public openapisdk.models.shared.Account account;
    public DfareportingAccountsGetResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public DfareportingAccountsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}