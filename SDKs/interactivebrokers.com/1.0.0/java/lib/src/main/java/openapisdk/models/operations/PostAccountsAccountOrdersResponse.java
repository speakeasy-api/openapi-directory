package openapisdk.models.operations;



public class PostAccountsAccountOrdersResponse {
    public String contentType;
    public PostAccountsAccountOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAccountsAccountOrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrderState[] orderStates;
    public PostAccountsAccountOrdersResponse withOrderStates(openapisdk.models.shared.OrderState[] orderStates) {
        this.orderStates = orderStates;
        return this;
    }
}