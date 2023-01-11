package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrustProductUpdateTrustProductRequest {
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public UpdateTrustProductUpdateTrustProductRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateTrustProductUpdateTrustProductRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.TrustProductEnumStatusEnum status;
    public UpdateTrustProductUpdateTrustProductRequest withStatus(openapisdk.models.shared.TrustProductEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdateTrustProductUpdateTrustProductRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
}