package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomerProfileUpdateCustomerProfileRequest {
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public UpdateCustomerProfileUpdateCustomerProfileRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateCustomerProfileUpdateCustomerProfileRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.CustomerProfileEnumStatusEnum status;
    public UpdateCustomerProfileUpdateCustomerProfileRequest withStatus(openapisdk.models.shared.CustomerProfileEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdateCustomerProfileUpdateCustomerProfileRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
}