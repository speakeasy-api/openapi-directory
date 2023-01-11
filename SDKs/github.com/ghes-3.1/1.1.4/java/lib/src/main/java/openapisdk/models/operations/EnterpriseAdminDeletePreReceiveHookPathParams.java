package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminDeletePreReceiveHookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pre_receive_hook_id")
    public Long preReceiveHookId;
    public EnterpriseAdminDeletePreReceiveHookPathParams withPreReceiveHookId(Long preReceiveHookId) {
        this.preReceiveHookId = preReceiveHookId;
        return this;
    }
}