package openapisdk.models.operations;



public class ContentAccountsLinkResponse {
    public openapisdk.models.shared.AccountsLinkResponse accountsLinkResponse;
    public ContentAccountsLinkResponse withAccountsLinkResponse(openapisdk.models.shared.AccountsLinkResponse accountsLinkResponse) {
        this.accountsLinkResponse = accountsLinkResponse;
        return this;
    }
    public String contentType;
    public ContentAccountsLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccountsLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}