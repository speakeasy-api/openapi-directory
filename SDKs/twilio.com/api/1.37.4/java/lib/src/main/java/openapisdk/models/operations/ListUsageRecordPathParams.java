package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListUsageRecordPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}