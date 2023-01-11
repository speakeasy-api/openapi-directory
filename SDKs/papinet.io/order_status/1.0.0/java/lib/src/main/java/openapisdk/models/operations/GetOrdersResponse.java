package openapisdk.models.operations;



public class GetOrdersResponse {
    public String contentType;
    public GetOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOfOrders listOfOrders;
    public GetOrdersResponse withListOfOrders(openapisdk.models.shared.ListOfOrders listOfOrders) {
        this.listOfOrders = listOfOrders;
        return this;
    }
    public Long statusCode;
    public GetOrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}