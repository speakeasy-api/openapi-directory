package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageTriggerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListUsageTriggerPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}