package openapisdk.models.operations;



public class CreateSipIpAccessControlListResponse {
    public String contentType;
    public CreateSipIpAccessControlListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSipIpAccessControlListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList apiV2010AccountSipSipIpAccessControlList;
    public CreateSipIpAccessControlListResponse withApiV2010AccountSipSipIpAccessControlList(openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList apiV2010AccountSipSipIpAccessControlList) {
        this.apiV2010AccountSipSipIpAccessControlList = apiV2010AccountSipSipIpAccessControlList;
        return this;
    }
}