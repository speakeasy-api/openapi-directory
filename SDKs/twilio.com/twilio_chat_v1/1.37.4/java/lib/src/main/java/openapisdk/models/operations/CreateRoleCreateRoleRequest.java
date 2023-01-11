package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoleCreateRoleRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateRoleCreateRoleRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Permission")
    public String[] permission;
    public CreateRoleCreateRoleRequest withPermission(String[] permission) {
        this.permission = permission;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.RoleEnumRoleTypeEnum type;
    public CreateRoleCreateRoleRequest withType(openapisdk.models.shared.RoleEnumRoleTypeEnum type) {
        this.type = type;
        return this;
    }
}