package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipIpAccessControlListRequest {
    public String serverURL;
    public CreateSipIpAccessControlListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSipIpAccessControlListPathParams pathParams;
    public CreateSipIpAccessControlListRequest withPathParams(CreateSipIpAccessControlListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSipIpAccessControlListCreateSipIpAccessControlListRequest request;
    public CreateSipIpAccessControlListRequest withRequest(CreateSipIpAccessControlListCreateSipIpAccessControlListRequest request) {
        this.request = request;
        return this;
    }
    public CreateSipIpAccessControlListSecurity security;
    public CreateSipIpAccessControlListRequest withSecurity(CreateSipIpAccessControlListSecurity security) {
        this.security = security;
        return this;
    }
}