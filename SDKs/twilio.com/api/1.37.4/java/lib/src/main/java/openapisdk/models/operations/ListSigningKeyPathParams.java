package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSigningKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListSigningKeyPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}