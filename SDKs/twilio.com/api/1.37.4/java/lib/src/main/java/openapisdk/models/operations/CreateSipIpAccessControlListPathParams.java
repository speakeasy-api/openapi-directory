package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipIpAccessControlListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateSipIpAccessControlListPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}