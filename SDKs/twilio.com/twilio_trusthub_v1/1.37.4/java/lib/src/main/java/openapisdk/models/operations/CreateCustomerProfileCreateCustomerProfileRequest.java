package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerProfileCreateCustomerProfileRequest {
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public CreateCustomerProfileCreateCustomerProfileRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateCustomerProfileCreateCustomerProfileRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=PolicySid")
    public String policySid;
    public CreateCustomerProfileCreateCustomerProfileRequest withPolicySid(String policySid) {
        this.policySid = policySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateCustomerProfileCreateCustomerProfileRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
}