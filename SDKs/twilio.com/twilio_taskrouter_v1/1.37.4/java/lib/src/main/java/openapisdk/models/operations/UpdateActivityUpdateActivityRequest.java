package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateActivityUpdateActivityRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateActivityUpdateActivityRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}