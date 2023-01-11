package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectionPolicyUpdateConnectionPolicyRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateConnectionPolicyUpdateConnectionPolicyRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}