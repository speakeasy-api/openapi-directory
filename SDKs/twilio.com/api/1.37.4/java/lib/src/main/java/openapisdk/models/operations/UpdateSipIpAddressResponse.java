package openapisdk.models.operations;



public class UpdateSipIpAddressResponse {
    public String contentType;
    public UpdateSipIpAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSipIpAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress apiV2010AccountSipSipIpAccessControlListSipIpAddress;
    public UpdateSipIpAddressResponse withApiV2010AccountSipSipIpAccessControlListSipIpAddress(openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress apiV2010AccountSipSipIpAccessControlListSipIpAddress) {
        this.apiV2010AccountSipSipIpAccessControlListSipIpAddress = apiV2010AccountSipSipIpAccessControlListSipIpAddress;
        return this;
    }
}