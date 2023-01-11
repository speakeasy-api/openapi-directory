package openapisdk.models.operations;



public class AdsenseAccountsListChildAccountsResponse {
    public String contentType;
    public AdsenseAccountsListChildAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListChildAccountsResponse listChildAccountsResponse;
    public AdsenseAccountsListChildAccountsResponse withListChildAccountsResponse(openapisdk.models.shared.ListChildAccountsResponse listChildAccountsResponse) {
        this.listChildAccountsResponse = listChildAccountsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsListChildAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}