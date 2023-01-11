package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordLastMonthPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListUsageRecordLastMonthPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}