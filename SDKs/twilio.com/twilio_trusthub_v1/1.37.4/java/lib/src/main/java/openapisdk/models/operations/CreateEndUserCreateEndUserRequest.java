package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEndUserCreateEndUserRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public Object attributes;
    public CreateEndUserCreateEndUserRequest withAttributes(Object attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateEndUserCreateEndUserRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public String type;
    public CreateEndUserCreateEndUserRequest withType(String type) {
        this.type = type;
        return this;
    }
}