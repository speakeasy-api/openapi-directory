package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}