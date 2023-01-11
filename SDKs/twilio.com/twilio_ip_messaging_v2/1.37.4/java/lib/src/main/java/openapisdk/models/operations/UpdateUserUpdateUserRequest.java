package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserUpdateUserRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateUserUpdateUserRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateUserUpdateUserRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public UpdateUserUpdateUserRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}