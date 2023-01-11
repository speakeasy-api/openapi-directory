package openapisdk.models.operations;



public class ResellerCustomersInsertResponse {
    public String contentType;
    public ResellerCustomersInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Customer customer;
    public ResellerCustomersInsertResponse withCustomer(openapisdk.models.shared.Customer customer) {
        this.customer = customer;
        return this;
    }
    public Long statusCode;
    public ResellerCustomersInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}