package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateQueuePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}