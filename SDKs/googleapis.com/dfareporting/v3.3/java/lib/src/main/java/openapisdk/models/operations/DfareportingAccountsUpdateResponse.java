package openapisdk.models.operations;



public class DfareportingAccountsUpdateResponse {
    public openapisdk.models.shared.Account account;
    public DfareportingAccountsUpdateResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public DfareportingAccountsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}