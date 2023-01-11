package openapisdk.models.operations;



public class ContentAccountsCustombatchResponse {
    public openapisdk.models.shared.AccountsCustomBatchResponse accountsCustomBatchResponse;
    public ContentAccountsCustombatchResponse withAccountsCustomBatchResponse(openapisdk.models.shared.AccountsCustomBatchResponse accountsCustomBatchResponse) {
        this.accountsCustomBatchResponse = accountsCustomBatchResponse;
        return this;
    }
    public String contentType;
    public ContentAccountsCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccountsCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}