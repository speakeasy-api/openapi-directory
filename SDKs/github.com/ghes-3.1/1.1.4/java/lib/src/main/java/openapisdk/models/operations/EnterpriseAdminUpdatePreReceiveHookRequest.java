package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdatePreReceiveHookRequest {
    public EnterpriseAdminUpdatePreReceiveHookPathParams pathParams;
    public EnterpriseAdminUpdatePreReceiveHookRequest withPathParams(EnterpriseAdminUpdatePreReceiveHookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdatePreReceiveHookRequestBody request;
    public EnterpriseAdminUpdatePreReceiveHookRequest withRequest(EnterpriseAdminUpdatePreReceiveHookRequestBody request) {
        this.request = request;
        return this;
    }
}