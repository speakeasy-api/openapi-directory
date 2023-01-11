package openapisdk.models.operations;



public class ContentOrdersCanceltestorderbycustomerResponse {
    public String contentType;
    public ContentOrdersCanceltestorderbycustomerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersCancelTestOrderByCustomerResponse ordersCancelTestOrderByCustomerResponse;
    public ContentOrdersCanceltestorderbycustomerResponse withOrdersCancelTestOrderByCustomerResponse(openapisdk.models.shared.OrdersCancelTestOrderByCustomerResponse ordersCancelTestOrderByCustomerResponse) {
        this.ordersCancelTestOrderByCustomerResponse = ordersCancelTestOrderByCustomerResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersCanceltestorderbycustomerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}