package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordThisMonthPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListUsageRecordThisMonthPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}