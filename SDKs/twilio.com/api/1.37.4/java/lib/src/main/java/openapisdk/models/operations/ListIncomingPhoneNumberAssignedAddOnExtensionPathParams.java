package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncomingPhoneNumberAssignedAddOnExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListIncomingPhoneNumberAssignedAddOnExtensionPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssignedAddOnSid")
    public String assignedAddOnSid;
    public ListIncomingPhoneNumberAssignedAddOnExtensionPathParams withAssignedAddOnSid(String assignedAddOnSid) {
        this.assignedAddOnSid = assignedAddOnSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceSid")
    public String resourceSid;
    public ListIncomingPhoneNumberAssignedAddOnExtensionPathParams withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
}