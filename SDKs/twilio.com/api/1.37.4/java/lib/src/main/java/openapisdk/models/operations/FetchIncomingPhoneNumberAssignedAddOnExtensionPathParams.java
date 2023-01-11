package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssignedAddOnSid")
    public String assignedAddOnSid;
    public FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams withAssignedAddOnSid(String assignedAddOnSid) {
        this.assignedAddOnSid = assignedAddOnSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceSid")
    public String resourceSid;
    public FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}