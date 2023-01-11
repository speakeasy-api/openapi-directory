package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBundleCopyCreateBundleCopyRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateBundleCopyCreateBundleCopyRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}