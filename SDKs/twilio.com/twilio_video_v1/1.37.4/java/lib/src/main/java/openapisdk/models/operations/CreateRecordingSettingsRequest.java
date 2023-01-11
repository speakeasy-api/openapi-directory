package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRecordingSettingsRequest {
    public String serverURL;
    public CreateRecordingSettingsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateRecordingSettingsCreateRecordingSettingsRequest request;
    public CreateRecordingSettingsRequest withRequest(CreateRecordingSettingsCreateRecordingSettingsRequest request) {
        this.request = request;
        return this;
    }
    public CreateRecordingSettingsSecurity security;
    public CreateRecordingSettingsRequest withSecurity(CreateRecordingSettingsSecurity security) {
        this.security = security;
        return this;
    }
}