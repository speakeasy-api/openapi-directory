package openapisdk.models.operations;



public class MybusinessaccountmanagementAccountsListResponse {
    public String contentType;
    public MybusinessaccountmanagementAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAccountsResponse listAccountsResponse;
    public MybusinessaccountmanagementAccountsListResponse withListAccountsResponse(openapisdk.models.shared.ListAccountsResponse listAccountsResponse) {
        this.listAccountsResponse = listAccountsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessaccountmanagementAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}