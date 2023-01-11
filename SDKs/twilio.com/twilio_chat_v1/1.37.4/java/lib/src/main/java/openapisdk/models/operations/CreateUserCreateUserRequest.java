package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserCreateUserRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateUserCreateUserRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateUserCreateUserRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateUserCreateUserRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public CreateUserCreateUserRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}