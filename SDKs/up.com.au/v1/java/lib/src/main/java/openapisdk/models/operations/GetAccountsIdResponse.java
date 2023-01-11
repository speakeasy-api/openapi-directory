package openapisdk.models.operations;



public class GetAccountsIdResponse {
    public String contentType;
    public GetAccountsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountResponse getAccountResponse;
    public GetAccountsIdResponse withGetAccountResponse(openapisdk.models.shared.GetAccountResponse getAccountResponse) {
        this.getAccountResponse = getAccountResponse;
        return this;
    }
    public Long statusCode;
    public GetAccountsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}