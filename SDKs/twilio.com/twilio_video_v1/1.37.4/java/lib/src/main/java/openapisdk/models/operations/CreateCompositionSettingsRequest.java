package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCompositionSettingsRequest {
    public String serverURL;
    public CreateCompositionSettingsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCompositionSettingsCreateCompositionSettingsRequest request;
    public CreateCompositionSettingsRequest withRequest(CreateCompositionSettingsCreateCompositionSettingsRequest request) {
        this.request = request;
        return this;
    }
    public CreateCompositionSettingsSecurity security;
    public CreateCompositionSettingsRequest withSecurity(CreateCompositionSettingsSecurity security) {
        this.security = security;
        return this;
    }
}