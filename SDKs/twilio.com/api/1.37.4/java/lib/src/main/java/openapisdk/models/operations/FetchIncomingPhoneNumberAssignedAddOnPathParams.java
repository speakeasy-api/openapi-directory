package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchIncomingPhoneNumberAssignedAddOnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchIncomingPhoneNumberAssignedAddOnPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceSid")
    public String resourceSid;
    public FetchIncomingPhoneNumberAssignedAddOnPathParams withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchIncomingPhoneNumberAssignedAddOnPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}