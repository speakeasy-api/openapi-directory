package openapisdk.models.operations;



public class GetConsumerV1SettingsResponse {
    public String contentType;
    public GetConsumerV1SettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OnlineSettingsViewModel onlineSettingsViewModel;
    public GetConsumerV1SettingsResponse withOnlineSettingsViewModel(openapisdk.models.shared.OnlineSettingsViewModel onlineSettingsViewModel) {
        this.onlineSettingsViewModel = onlineSettingsViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1SettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}