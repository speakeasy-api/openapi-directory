package openapisdk.models.operations;



public class ListCustomerProfileResponse {
    public String contentType;
    public ListCustomerProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListCustomerProfileListCustomerProfileResponse listCustomerProfileResponse;
    public ListCustomerProfileResponse withListCustomerProfileResponse(ListCustomerProfileListCustomerProfileResponse listCustomerProfileResponse) {
        this.listCustomerProfileResponse = listCustomerProfileResponse;
        return this;
    }
    public Long statusCode;
    public ListCustomerProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}