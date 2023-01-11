package openapisdk.models.operations;



public class AndroiddeviceprovisioningPartnersVendorsListResponse {
    public String contentType;
    public AndroiddeviceprovisioningPartnersVendorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVendorsResponse listVendorsResponse;
    public AndroiddeviceprovisioningPartnersVendorsListResponse withListVendorsResponse(openapisdk.models.shared.ListVendorsResponse listVendorsResponse) {
        this.listVendorsResponse = listVendorsResponse;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningPartnersVendorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}