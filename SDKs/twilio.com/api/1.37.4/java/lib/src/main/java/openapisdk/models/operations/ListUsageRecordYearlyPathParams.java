package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordYearlyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListUsageRecordYearlyPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}