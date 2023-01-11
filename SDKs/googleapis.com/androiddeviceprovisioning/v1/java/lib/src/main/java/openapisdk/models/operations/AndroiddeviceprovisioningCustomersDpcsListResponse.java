package openapisdk.models.operations;



public class AndroiddeviceprovisioningCustomersDpcsListResponse {
    public String contentType;
    public AndroiddeviceprovisioningCustomersDpcsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerListDpcsResponse customerListDpcsResponse;
    public AndroiddeviceprovisioningCustomersDpcsListResponse withCustomerListDpcsResponse(openapisdk.models.shared.CustomerListDpcsResponse customerListDpcsResponse) {
        this.customerListDpcsResponse = customerListDpcsResponse;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningCustomersDpcsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}