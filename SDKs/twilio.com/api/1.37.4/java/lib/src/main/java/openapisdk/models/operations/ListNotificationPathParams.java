package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNotificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListNotificationPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}