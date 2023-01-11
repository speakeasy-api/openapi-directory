package openapisdk.models.operations;



public class GetAccountsResponse {
    public String contentType;
    public GetAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAccountsResponse listAccountsResponse;
    public GetAccountsResponse withListAccountsResponse(openapisdk.models.shared.ListAccountsResponse listAccountsResponse) {
        this.listAccountsResponse = listAccountsResponse;
        return this;
    }
    public Long statusCode;
    public GetAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}