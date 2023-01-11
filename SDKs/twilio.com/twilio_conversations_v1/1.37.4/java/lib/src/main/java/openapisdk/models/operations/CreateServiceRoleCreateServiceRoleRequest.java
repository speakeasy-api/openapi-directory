package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceRoleCreateServiceRoleRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateServiceRoleCreateServiceRoleRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Permission")
    public String[] permission;
    public CreateServiceRoleCreateServiceRoleRequest withPermission(String[] permission) {
        this.permission = permission;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.ServiceRoleEnumRoleTypeEnum type;
    public CreateServiceRoleCreateServiceRoleRequest withType(openapisdk.models.shared.ServiceRoleEnumRoleTypeEnum type) {
        this.type = type;
        return this;
    }
}