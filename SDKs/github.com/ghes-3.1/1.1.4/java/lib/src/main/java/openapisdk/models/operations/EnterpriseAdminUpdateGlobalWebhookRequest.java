package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateGlobalWebhookRequest {
    public EnterpriseAdminUpdateGlobalWebhookPathParams pathParams;
    public EnterpriseAdminUpdateGlobalWebhookRequest withPathParams(EnterpriseAdminUpdateGlobalWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnterpriseAdminUpdateGlobalWebhookHeaders headers;
    public EnterpriseAdminUpdateGlobalWebhookRequest withHeaders(EnterpriseAdminUpdateGlobalWebhookHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdateGlobalWebhookRequestBody request;
    public EnterpriseAdminUpdateGlobalWebhookRequest withRequest(EnterpriseAdminUpdateGlobalWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}