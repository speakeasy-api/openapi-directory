package openapisdk.models.operations;



public class AdexchangebuyerAccountsListResponse {
    public openapisdk.models.shared.AccountsList accountsList;
    public AdexchangebuyerAccountsListResponse withAccountsList(openapisdk.models.shared.AccountsList accountsList) {
        this.accountsList = accountsList;
        return this;
    }
    public String contentType;
    public AdexchangebuyerAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}