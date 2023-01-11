package openapisdk.models.operations;



public class BooksMyconfigGetUserSettingsRequest {
    public BooksMyconfigGetUserSettingsQueryParams queryParams;
    public BooksMyconfigGetUserSettingsRequest withQueryParams(BooksMyconfigGetUserSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksMyconfigGetUserSettingsSecurity security;
    public BooksMyconfigGetUserSettingsRequest withSecurity(BooksMyconfigGetUserSettingsSecurity security) {
        this.security = security;
        return this;
    }
}