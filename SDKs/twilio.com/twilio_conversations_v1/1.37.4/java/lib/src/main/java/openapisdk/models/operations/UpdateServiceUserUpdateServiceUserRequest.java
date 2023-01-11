package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceUserUpdateServiceUserRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateServiceUserUpdateServiceUserRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateServiceUserUpdateServiceUserRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public UpdateServiceUserUpdateServiceUserRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}