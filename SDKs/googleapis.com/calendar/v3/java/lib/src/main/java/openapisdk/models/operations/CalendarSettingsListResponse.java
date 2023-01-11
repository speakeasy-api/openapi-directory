package openapisdk.models.operations;



public class CalendarSettingsListResponse {
    public String contentType;
    public CalendarSettingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Settings settings;
    public CalendarSettingsListResponse withSettings(openapisdk.models.shared.Settings settings) {
        this.settings = settings;
        return this;
    }
    public Long statusCode;
    public CalendarSettingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}