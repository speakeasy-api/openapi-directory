package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelCreateChannelRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateChannelCreateChannelRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateChannelCreateChannelRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.ChannelEnumChannelTypeEnum type;
    public CreateChannelCreateChannelRequest withType(openapisdk.models.shared.ChannelEnumChannelTypeEnum type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateChannelCreateChannelRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}