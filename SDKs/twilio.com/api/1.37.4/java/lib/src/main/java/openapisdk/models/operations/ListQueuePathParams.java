package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListQueuePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}