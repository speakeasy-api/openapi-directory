package openapisdk.models.operations;



public class IapUpdateIapSettingsResponse {
    public String contentType;
    public IapUpdateIapSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IapSettings iapSettings;
    public IapUpdateIapSettingsResponse withIapSettings(openapisdk.models.shared.IapSettings iapSettings) {
        this.iapSettings = iapSettings;
        return this;
    }
    public Long statusCode;
    public IapUpdateIapSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}