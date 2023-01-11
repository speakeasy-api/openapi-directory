package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListMessagePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}