package openapisdk.models.operations;



public class AlertcenterGetSettingsResponse {
    public String contentType;
    public AlertcenterGetSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Settings settings;
    public AlertcenterGetSettingsResponse withSettings(openapisdk.models.shared.Settings settings) {
        this.settings = settings;
        return this;
    }
    public Long statusCode;
    public AlertcenterGetSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}