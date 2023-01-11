package openapisdk.models.operations;



public class ResellerCustomersGetResponse {
    public String contentType;
    public ResellerCustomersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Customer customer;
    public ResellerCustomersGetResponse withCustomer(openapisdk.models.shared.Customer customer) {
        this.customer = customer;
        return this;
    }
    public Long statusCode;
    public ResellerCustomersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}