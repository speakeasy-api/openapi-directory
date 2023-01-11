package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBundleUpdateBundleRequest {
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public UpdateBundleUpdateBundleRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateBundleUpdateBundleRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.BundleEnumStatusEnum status;
    public UpdateBundleUpdateBundleRequest withStatus(openapisdk.models.shared.BundleEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdateBundleUpdateBundleRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
}