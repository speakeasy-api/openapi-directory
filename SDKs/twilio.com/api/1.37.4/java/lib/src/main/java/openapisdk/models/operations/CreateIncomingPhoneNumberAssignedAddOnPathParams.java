package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberAssignedAddOnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateIncomingPhoneNumberAssignedAddOnPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceSid")
    public String resourceSid;
    public CreateIncomingPhoneNumberAssignedAddOnPathParams withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
}