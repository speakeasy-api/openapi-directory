package openapisdk.models.operations;



public class PutWebhooksV3AppIdSettingsConfigureResponse {
    public byte[] body;
    public PutWebhooksV3AppIdSettingsConfigureResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PutWebhooksV3AppIdSettingsConfigureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingsResponse settingsResponse;
    public PutWebhooksV3AppIdSettingsConfigureResponse withSettingsResponse(openapisdk.models.shared.SettingsResponse settingsResponse) {
        this.settingsResponse = settingsResponse;
        return this;
    }
    public Long statusCode;
    public PutWebhooksV3AppIdSettingsConfigureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}