package openapisdk.models.operations;



public class ResellerCustomersPatchResponse {
    public String contentType;
    public ResellerCustomersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Customer customer;
    public ResellerCustomersPatchResponse withCustomer(openapisdk.models.shared.Customer customer) {
        this.customer = customer;
        return this;
    }
    public Long statusCode;
    public ResellerCustomersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}