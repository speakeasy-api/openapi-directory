package openapisdk.models.operations;



public class MybusinessAccountsListResponse {
    public String contentType;
    public MybusinessAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAccountsResponse listAccountsResponse;
    public MybusinessAccountsListResponse withListAccountsResponse(openapisdk.models.shared.ListAccountsResponse listAccountsResponse) {
        this.listAccountsResponse = listAccountsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}