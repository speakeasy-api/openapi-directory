package openapisdk.models.operations;



public class UpdateSipIpAccessControlListResponse {
    public String contentType;
    public UpdateSipIpAccessControlListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSipIpAccessControlListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList apiV2010AccountSipSipIpAccessControlList;
    public UpdateSipIpAccessControlListResponse withApiV2010AccountSipSipIpAccessControlList(openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList apiV2010AccountSipSipIpAccessControlList) {
        this.apiV2010AccountSipSipIpAccessControlList = apiV2010AccountSipSipIpAccessControlList;
        return this;
    }
}