package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChannelUpdateChannelRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateChannelUpdateChannelRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateChannelUpdateChannelRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateChannelUpdateChannelRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}