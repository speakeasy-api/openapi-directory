package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOutgoingCallerIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListOutgoingCallerIdPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}