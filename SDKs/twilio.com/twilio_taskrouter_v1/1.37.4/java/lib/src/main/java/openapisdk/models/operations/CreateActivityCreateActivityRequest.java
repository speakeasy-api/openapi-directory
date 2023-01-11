package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateActivityCreateActivityRequest {
    @SpeakeasyMetadata("form:name=Available")
    public Boolean available;
    public CreateActivityCreateActivityRequest withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateActivityCreateActivityRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}