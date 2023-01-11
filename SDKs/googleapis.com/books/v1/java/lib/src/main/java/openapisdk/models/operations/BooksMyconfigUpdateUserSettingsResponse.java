package openapisdk.models.operations;



public class BooksMyconfigUpdateUserSettingsResponse {
    public String contentType;
    public BooksMyconfigUpdateUserSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksMyconfigUpdateUserSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Usersettings usersettings;
    public BooksMyconfigUpdateUserSettingsResponse withUsersettings(openapisdk.models.shared.Usersettings usersettings) {
        this.usersettings = usersettings;
        return this;
    }
}