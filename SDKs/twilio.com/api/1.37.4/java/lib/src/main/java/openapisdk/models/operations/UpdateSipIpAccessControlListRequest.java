package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipIpAccessControlListRequest {
    public String serverURL;
    public UpdateSipIpAccessControlListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSipIpAccessControlListPathParams pathParams;
    public UpdateSipIpAccessControlListRequest withPathParams(UpdateSipIpAccessControlListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest request;
    public UpdateSipIpAccessControlListRequest withRequest(UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSipIpAccessControlListSecurity security;
    public UpdateSipIpAccessControlListRequest withSecurity(UpdateSipIpAccessControlListSecurity security) {
        this.security = security;
        return this;
    }
}