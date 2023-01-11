package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListCallPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}