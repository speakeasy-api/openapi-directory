package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrustProductCreateTrustProductRequest {
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public CreateTrustProductCreateTrustProductRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateTrustProductCreateTrustProductRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=PolicySid")
    public String policySid;
    public CreateTrustProductCreateTrustProductRequest withPolicySid(String policySid) {
        this.policySid = policySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateTrustProductCreateTrustProductRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
}