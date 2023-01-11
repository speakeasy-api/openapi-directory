package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIncomingPhoneNumberAssignedAddOnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteIncomingPhoneNumberAssignedAddOnPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceSid")
    public String resourceSid;
    public DeleteIncomingPhoneNumberAssignedAddOnPathParams withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteIncomingPhoneNumberAssignedAddOnPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}