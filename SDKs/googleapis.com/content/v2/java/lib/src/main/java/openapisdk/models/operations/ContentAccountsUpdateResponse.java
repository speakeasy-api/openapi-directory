package openapisdk.models.operations;



public class ContentAccountsUpdateResponse {
    public openapisdk.models.shared.Account account;
    public ContentAccountsUpdateResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public ContentAccountsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccountsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}