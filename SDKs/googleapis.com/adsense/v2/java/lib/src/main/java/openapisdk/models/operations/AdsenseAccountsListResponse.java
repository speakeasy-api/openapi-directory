package openapisdk.models.operations;



public class AdsenseAccountsListResponse {
    public String contentType;
    public AdsenseAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAccountsResponse listAccountsResponse;
    public AdsenseAccountsListResponse withListAccountsResponse(openapisdk.models.shared.ListAccountsResponse listAccountsResponse) {
        this.listAccountsResponse = listAccountsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}