package openapisdk.models.operations;



public class AdsensehostAccountsGetResponse {
    public openapisdk.models.shared.Account account;
    public AdsensehostAccountsGetResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public AdsensehostAccountsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostAccountsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}