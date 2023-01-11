package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountSettingsRequest {
    public String serverURL;
    public UpdateAccountSettingsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateAccountSettingsUpdateAccountSettingsRequest request;
    public UpdateAccountSettingsRequest withRequest(UpdateAccountSettingsUpdateAccountSettingsRequest request) {
        this.request = request;
        return this;
    }
    public UpdateAccountSettingsSecurity security;
    public UpdateAccountSettingsRequest withSecurity(UpdateAccountSettingsSecurity security) {
        this.security = security;
        return this;
    }
}