package openapisdk.models.operations;



public class FetchRecordingSettingsRequest {
    public String serverURL;
    public FetchRecordingSettingsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRecordingSettingsSecurity security;
    public FetchRecordingSettingsRequest withSecurity(FetchRecordingSettingsSecurity security) {
        this.security = security;
        return this;
    }
}