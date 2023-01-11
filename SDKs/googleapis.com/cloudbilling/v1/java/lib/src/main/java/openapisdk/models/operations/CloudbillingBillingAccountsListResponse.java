package openapisdk.models.operations;



public class CloudbillingBillingAccountsListResponse {
    public String contentType;
    public CloudbillingBillingAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBillingAccountsResponse listBillingAccountsResponse;
    public CloudbillingBillingAccountsListResponse withListBillingAccountsResponse(openapisdk.models.shared.ListBillingAccountsResponse listBillingAccountsResponse) {
        this.listBillingAccountsResponse = listBillingAccountsResponse;
        return this;
    }
    public Long statusCode;
    public CloudbillingBillingAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}