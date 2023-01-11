package openapisdk.models.operations;



public class GetAccountsAccountOrdersResponse {
    public String contentType;
    public GetAccountsAccountOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountOrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrderState[] orderStates;
    public GetAccountsAccountOrdersResponse withOrderStates(openapisdk.models.shared.OrderState[] orderStates) {
        this.orderStates = orderStates;
        return this;
    }
}