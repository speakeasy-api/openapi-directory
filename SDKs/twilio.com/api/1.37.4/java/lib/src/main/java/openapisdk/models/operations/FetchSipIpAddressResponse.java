package openapisdk.models.operations;



public class FetchSipIpAddressResponse {
    public String contentType;
    public FetchSipIpAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSipIpAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress apiV2010AccountSipSipIpAccessControlListSipIpAddress;
    public FetchSipIpAddressResponse withApiV2010AccountSipSipIpAccessControlListSipIpAddress(openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress apiV2010AccountSipSipIpAccessControlListSipIpAddress) {
        this.apiV2010AccountSipSipIpAccessControlListSipIpAddress = apiV2010AccountSipSipIpAccessControlListSipIpAddress;
        return this;
    }
}