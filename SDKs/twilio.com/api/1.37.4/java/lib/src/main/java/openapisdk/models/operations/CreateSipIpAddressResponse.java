package openapisdk.models.operations;



public class CreateSipIpAddressResponse {
    public String contentType;
    public CreateSipIpAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSipIpAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress apiV2010AccountSipSipIpAccessControlListSipIpAddress;
    public CreateSipIpAddressResponse withApiV2010AccountSipSipIpAccessControlListSipIpAddress(openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress apiV2010AccountSipSipIpAccessControlListSipIpAddress) {
        this.apiV2010AccountSipSipIpAccessControlListSipIpAddress = apiV2010AccountSipSipIpAccessControlListSipIpAddress;
        return this;
    }
}