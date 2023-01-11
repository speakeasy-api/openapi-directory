package openapisdk.models.operations;



public class GetAccountsAccountOrdersCustomerOrderIdResponse {
    public String contentType;
    public GetAccountsAccountOrdersCustomerOrderIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountOrdersCustomerOrderIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrderState[] orderStates;
    public GetAccountsAccountOrdersCustomerOrderIdResponse withOrderStates(openapisdk.models.shared.OrderState[] orderStates) {
        this.orderStates = orderStates;
        return this;
    }
}