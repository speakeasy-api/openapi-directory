package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipIpAccessControlListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListSipIpAccessControlListPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}