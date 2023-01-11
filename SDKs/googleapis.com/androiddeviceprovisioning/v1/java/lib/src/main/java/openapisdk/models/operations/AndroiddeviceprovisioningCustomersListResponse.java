package openapisdk.models.operations;



public class AndroiddeviceprovisioningCustomersListResponse {
    public String contentType;
    public AndroiddeviceprovisioningCustomersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerListCustomersResponse customerListCustomersResponse;
    public AndroiddeviceprovisioningCustomersListResponse withCustomerListCustomersResponse(openapisdk.models.shared.CustomerListCustomersResponse customerListCustomersResponse) {
        this.customerListCustomersResponse = customerListCustomersResponse;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningCustomersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}