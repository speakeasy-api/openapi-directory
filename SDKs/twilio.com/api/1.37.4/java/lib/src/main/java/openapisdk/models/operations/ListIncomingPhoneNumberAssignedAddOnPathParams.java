package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncomingPhoneNumberAssignedAddOnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListIncomingPhoneNumberAssignedAddOnPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceSid")
    public String resourceSid;
    public ListIncomingPhoneNumberAssignedAddOnPathParams withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
}