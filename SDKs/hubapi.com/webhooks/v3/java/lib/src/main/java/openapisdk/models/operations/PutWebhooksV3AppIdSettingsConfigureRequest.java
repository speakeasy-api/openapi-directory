package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWebhooksV3AppIdSettingsConfigureRequest {
    public PutWebhooksV3AppIdSettingsConfigurePathParams pathParams;
    public PutWebhooksV3AppIdSettingsConfigureRequest withPathParams(PutWebhooksV3AppIdSettingsConfigurePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SettingsChangeRequest request;
    public PutWebhooksV3AppIdSettingsConfigureRequest withRequest(openapisdk.models.shared.SettingsChangeRequest request) {
        this.request = request;
        return this;
    }
    public PutWebhooksV3AppIdSettingsConfigureSecurity security;
    public PutWebhooksV3AppIdSettingsConfigureRequest withSecurity(PutWebhooksV3AppIdSettingsConfigureSecurity security) {
        this.security = security;
        return this;
    }
}