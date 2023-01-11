package openapisdk.models.operations;



public class AndroiddeviceprovisioningPartnersCustomersListResponse {
    public String contentType;
    public AndroiddeviceprovisioningPartnersCustomersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCustomersResponse listCustomersResponse;
    public AndroiddeviceprovisioningPartnersCustomersListResponse withListCustomersResponse(openapisdk.models.shared.ListCustomersResponse listCustomersResponse) {
        this.listCustomersResponse = listCustomersResponse;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningPartnersCustomersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}