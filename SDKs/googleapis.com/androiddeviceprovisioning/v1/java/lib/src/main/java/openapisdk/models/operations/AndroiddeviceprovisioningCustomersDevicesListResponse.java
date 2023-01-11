package openapisdk.models.operations;



public class AndroiddeviceprovisioningCustomersDevicesListResponse {
    public String contentType;
    public AndroiddeviceprovisioningCustomersDevicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerListDevicesResponse customerListDevicesResponse;
    public AndroiddeviceprovisioningCustomersDevicesListResponse withCustomerListDevicesResponse(openapisdk.models.shared.CustomerListDevicesResponse customerListDevicesResponse) {
        this.customerListDevicesResponse = customerListDevicesResponse;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningCustomersDevicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}