package openapisdk.models.operations;



public class ResellerCustomersUpdateResponse {
    public String contentType;
    public ResellerCustomersUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Customer customer;
    public ResellerCustomersUpdateResponse withCustomer(openapisdk.models.shared.Customer customer) {
        this.customer = customer;
        return this;
    }
    public Long statusCode;
    public ResellerCustomersUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}