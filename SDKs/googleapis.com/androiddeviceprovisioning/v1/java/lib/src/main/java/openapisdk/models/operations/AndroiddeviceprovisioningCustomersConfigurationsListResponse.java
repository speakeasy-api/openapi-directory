package openapisdk.models.operations;



public class AndroiddeviceprovisioningCustomersConfigurationsListResponse {
    public String contentType;
    public AndroiddeviceprovisioningCustomersConfigurationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerListConfigurationsResponse customerListConfigurationsResponse;
    public AndroiddeviceprovisioningCustomersConfigurationsListResponse withCustomerListConfigurationsResponse(openapisdk.models.shared.CustomerListConfigurationsResponse customerListConfigurationsResponse) {
        this.customerListConfigurationsResponse = customerListConfigurationsResponse;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningCustomersConfigurationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}