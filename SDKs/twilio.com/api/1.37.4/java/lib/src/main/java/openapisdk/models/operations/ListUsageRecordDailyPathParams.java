package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordDailyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListUsageRecordDailyPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}