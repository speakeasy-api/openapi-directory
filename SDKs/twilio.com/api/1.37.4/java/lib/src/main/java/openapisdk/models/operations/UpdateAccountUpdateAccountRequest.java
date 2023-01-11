package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountUpdateAccountRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateAccountUpdateAccountRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.AccountEnumStatusEnum status;
    public UpdateAccountUpdateAccountRequest withStatus(openapisdk.models.shared.AccountEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}