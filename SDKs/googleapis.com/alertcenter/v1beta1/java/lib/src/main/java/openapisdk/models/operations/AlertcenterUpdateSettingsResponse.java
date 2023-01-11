package openapisdk.models.operations;



public class AlertcenterUpdateSettingsResponse {
    public String contentType;
    public AlertcenterUpdateSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Settings settings;
    public AlertcenterUpdateSettingsResponse withSettings(openapisdk.models.shared.Settings settings) {
        this.settings = settings;
        return this;
    }
    public Long statusCode;
    public AlertcenterUpdateSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}