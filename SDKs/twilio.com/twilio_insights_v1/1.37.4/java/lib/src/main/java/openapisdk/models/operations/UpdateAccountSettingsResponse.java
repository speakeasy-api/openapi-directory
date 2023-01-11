package openapisdk.models.operations;



public class UpdateAccountSettingsResponse {
    public String contentType;
    public UpdateAccountSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAccountSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InsightsV1AccountSettings insightsV1AccountSettings;
    public UpdateAccountSettingsResponse withInsightsV1AccountSettings(openapisdk.models.shared.InsightsV1AccountSettings insightsV1AccountSettings) {
        this.insightsV1AccountSettings = insightsV1AccountSettings;
        return this;
    }
}