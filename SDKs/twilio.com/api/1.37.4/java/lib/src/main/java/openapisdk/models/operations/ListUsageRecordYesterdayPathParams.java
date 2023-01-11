package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordYesterdayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListUsageRecordYesterdayPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}