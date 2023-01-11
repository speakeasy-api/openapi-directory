package openapisdk.models.operations;



public class AndroiddeviceprovisioningPartnersVendorsCustomersListResponse {
    public String contentType;
    public AndroiddeviceprovisioningPartnersVendorsCustomersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVendorCustomersResponse listVendorCustomersResponse;
    public AndroiddeviceprovisioningPartnersVendorsCustomersListResponse withListVendorCustomersResponse(openapisdk.models.shared.ListVendorCustomersResponse listVendorCustomersResponse) {
        this.listVendorCustomersResponse = listVendorCustomersResponse;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningPartnersVendorsCustomersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}