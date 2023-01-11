package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordMonthlyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListUsageRecordMonthlyPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}