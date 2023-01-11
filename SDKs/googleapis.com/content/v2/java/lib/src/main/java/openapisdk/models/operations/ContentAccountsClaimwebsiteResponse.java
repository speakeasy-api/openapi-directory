package openapisdk.models.operations;



public class ContentAccountsClaimwebsiteResponse {
    public openapisdk.models.shared.AccountsClaimWebsiteResponse accountsClaimWebsiteResponse;
    public ContentAccountsClaimwebsiteResponse withAccountsClaimWebsiteResponse(openapisdk.models.shared.AccountsClaimWebsiteResponse accountsClaimWebsiteResponse) {
        this.accountsClaimWebsiteResponse = accountsClaimWebsiteResponse;
        return this;
    }
    public String contentType;
    public ContentAccountsClaimwebsiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccountsClaimwebsiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}