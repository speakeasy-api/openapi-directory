package openapisdk.models.operations;



public class IapGetIapSettingsResponse {
    public String contentType;
    public IapGetIapSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IapSettings iapSettings;
    public IapGetIapSettingsResponse withIapSettings(openapisdk.models.shared.IapSettings iapSettings) {
        this.iapSettings = iapSettings;
        return this;
    }
    public Long statusCode;
    public IapGetIapSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}