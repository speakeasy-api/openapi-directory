package openapisdk.models.operations;



public class CalendarSettingsGetResponse {
    public String contentType;
    public CalendarSettingsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Setting setting;
    public CalendarSettingsGetResponse withSetting(openapisdk.models.shared.Setting setting) {
        this.setting = setting;
        return this;
    }
    public Long statusCode;
    public CalendarSettingsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}