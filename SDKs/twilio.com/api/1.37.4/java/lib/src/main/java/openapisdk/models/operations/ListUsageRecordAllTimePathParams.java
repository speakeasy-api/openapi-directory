package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordAllTimePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListUsageRecordAllTimePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}