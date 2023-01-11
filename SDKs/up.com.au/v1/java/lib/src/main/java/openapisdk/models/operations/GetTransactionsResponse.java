package openapisdk.models.operations;



public class GetTransactionsResponse {
    public String contentType;
    public GetTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTransactionsResponse listTransactionsResponse;
    public GetTransactionsResponse withListTransactionsResponse(openapisdk.models.shared.ListTransactionsResponse listTransactionsResponse) {
        this.listTransactionsResponse = listTransactionsResponse;
        return this;
    }
    public Long statusCode;
    public GetTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}