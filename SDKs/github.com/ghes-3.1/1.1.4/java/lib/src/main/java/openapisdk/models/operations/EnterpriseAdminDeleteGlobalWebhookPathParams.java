package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminDeleteGlobalWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;
    public EnterpriseAdminDeleteGlobalWebhookPathParams withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
}