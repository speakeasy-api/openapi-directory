package openapisdk.models.operations;



public class BooksMyconfigGetUserSettingsResponse {
    public String contentType;
    public BooksMyconfigGetUserSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksMyconfigGetUserSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Usersettings usersettings;
    public BooksMyconfigGetUserSettingsResponse withUsersettings(openapisdk.models.shared.Usersettings usersettings) {
        this.usersettings = usersettings;
        return this;
    }
}