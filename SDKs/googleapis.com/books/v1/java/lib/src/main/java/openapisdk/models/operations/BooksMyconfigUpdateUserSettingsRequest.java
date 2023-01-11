package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMyconfigUpdateUserSettingsRequest {
    public BooksMyconfigUpdateUserSettingsQueryParams queryParams;
    public BooksMyconfigUpdateUserSettingsRequest withQueryParams(BooksMyconfigUpdateUserSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Usersettings request;
    public BooksMyconfigUpdateUserSettingsRequest withRequest(openapisdk.models.shared.Usersettings request) {
        this.request = request;
        return this;
    }
    public BooksMyconfigUpdateUserSettingsSecurity security;
    public BooksMyconfigUpdateUserSettingsRequest withSecurity(BooksMyconfigUpdateUserSettingsSecurity security) {
        this.security = security;
        return this;
    }
}