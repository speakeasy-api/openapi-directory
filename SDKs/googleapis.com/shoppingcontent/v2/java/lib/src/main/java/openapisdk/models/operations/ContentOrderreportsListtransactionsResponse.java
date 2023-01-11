package openapisdk.models.operations;



public class ContentOrderreportsListtransactionsResponse {
    public String contentType;
    public ContentOrderreportsListtransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderreportsListTransactionsResponse orderreportsListTransactionsResponse;
    public ContentOrderreportsListtransactionsResponse withOrderreportsListTransactionsResponse(openapisdk.models.shared.OrderreportsListTransactionsResponse orderreportsListTransactionsResponse) {
        this.orderreportsListTransactionsResponse = orderreportsListTransactionsResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrderreportsListtransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}