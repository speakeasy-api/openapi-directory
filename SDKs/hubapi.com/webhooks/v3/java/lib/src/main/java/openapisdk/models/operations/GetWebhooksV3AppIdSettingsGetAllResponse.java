package openapisdk.models.operations;



public class GetWebhooksV3AppIdSettingsGetAllResponse {
    public byte[] body;
    public GetWebhooksV3AppIdSettingsGetAllResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetWebhooksV3AppIdSettingsGetAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingsResponse settingsResponse;
    public GetWebhooksV3AppIdSettingsGetAllResponse withSettingsResponse(openapisdk.models.shared.SettingsResponse settingsResponse) {
        this.settingsResponse = settingsResponse;
        return this;
    }
    public Long statusCode;
    public GetWebhooksV3AppIdSettingsGetAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}