package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDialingPermissionsSettingsRequest {
    public String serverURL;
    public UpdateDialingPermissionsSettingsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest request;
    public UpdateDialingPermissionsSettingsRequest withRequest(UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDialingPermissionsSettingsSecurity security;
    public UpdateDialingPermissionsSettingsRequest withSecurity(UpdateDialingPermissionsSettingsSecurity security) {
        this.security = security;
        return this;
    }
}