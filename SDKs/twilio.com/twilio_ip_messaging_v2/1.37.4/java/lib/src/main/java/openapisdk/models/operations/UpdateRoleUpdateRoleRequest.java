package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoleUpdateRoleRequest {
    @SpeakeasyMetadata("form:name=Permission")
    public String[] permission;
    public UpdateRoleUpdateRoleRequest withPermission(String[] permission) {
        this.permission = permission;
        return this;
    }
}