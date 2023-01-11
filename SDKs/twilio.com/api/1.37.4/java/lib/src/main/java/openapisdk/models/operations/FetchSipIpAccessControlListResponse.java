package openapisdk.models.operations;



public class FetchSipIpAccessControlListResponse {
    public String contentType;
    public FetchSipIpAccessControlListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSipIpAccessControlListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList apiV2010AccountSipSipIpAccessControlList;
    public FetchSipIpAccessControlListResponse withApiV2010AccountSipSipIpAccessControlList(openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList apiV2010AccountSipSipIpAccessControlList) {
        this.apiV2010AccountSipSipIpAccessControlList = apiV2010AccountSipSipIpAccessControlList;
        return this;
    }
}