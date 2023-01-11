package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsUpdateSecuritySettingsRequest {
    public CloudidentityGroupsUpdateSecuritySettingsPathParams pathParams;
    public CloudidentityGroupsUpdateSecuritySettingsRequest withPathParams(CloudidentityGroupsUpdateSecuritySettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityGroupsUpdateSecuritySettingsQueryParams queryParams;
    public CloudidentityGroupsUpdateSecuritySettingsRequest withQueryParams(CloudidentityGroupsUpdateSecuritySettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SecuritySettingsInput request;
    public CloudidentityGroupsUpdateSecuritySettingsRequest withRequest(openapisdk.models.shared.SecuritySettingsInput request) {
        this.request = request;
        return this;
    }
    public CloudidentityGroupsUpdateSecuritySettingsSecurity security;
    public CloudidentityGroupsUpdateSecuritySettingsRequest withSecurity(CloudidentityGroupsUpdateSecuritySettingsSecurity security) {
        this.security = security;
        return this;
    }
}