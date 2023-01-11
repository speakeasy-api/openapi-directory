package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListApplicationPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}