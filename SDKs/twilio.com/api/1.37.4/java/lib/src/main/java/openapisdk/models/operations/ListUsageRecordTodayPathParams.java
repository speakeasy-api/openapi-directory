package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordTodayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListUsageRecordTodayPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}