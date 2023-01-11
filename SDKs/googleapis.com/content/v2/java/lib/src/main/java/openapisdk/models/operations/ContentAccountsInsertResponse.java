package openapisdk.models.operations;



public class ContentAccountsInsertResponse {
    public openapisdk.models.shared.Account account;
    public ContentAccountsInsertResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public ContentAccountsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccountsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}