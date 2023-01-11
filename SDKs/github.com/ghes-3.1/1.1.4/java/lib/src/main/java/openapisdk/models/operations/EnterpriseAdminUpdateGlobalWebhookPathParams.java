package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateGlobalWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;
    public EnterpriseAdminUpdateGlobalWebhookPathParams withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
}