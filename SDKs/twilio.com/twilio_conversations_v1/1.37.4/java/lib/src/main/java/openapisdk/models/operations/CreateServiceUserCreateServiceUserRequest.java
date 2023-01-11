package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceUserCreateServiceUserRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateServiceUserCreateServiceUserRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateServiceUserCreateServiceUserRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateServiceUserCreateServiceUserRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public CreateServiceUserCreateServiceUserRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}