package openapisdk.models.operations;



public class FetchAccountSettingsResponse {
    public String contentType;
    public FetchAccountSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAccountSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InsightsV1AccountSettings insightsV1AccountSettings;
    public FetchAccountSettingsResponse withInsightsV1AccountSettings(openapisdk.models.shared.InsightsV1AccountSettings insightsV1AccountSettings) {
        this.insightsV1AccountSettings = insightsV1AccountSettings;
        return this;
    }
}