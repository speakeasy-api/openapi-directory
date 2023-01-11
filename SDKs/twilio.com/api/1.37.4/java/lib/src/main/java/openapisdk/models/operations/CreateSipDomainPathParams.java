package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateSipDomainPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}