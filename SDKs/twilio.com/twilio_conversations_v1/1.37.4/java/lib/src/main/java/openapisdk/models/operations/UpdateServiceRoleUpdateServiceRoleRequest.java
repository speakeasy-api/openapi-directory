package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceRoleUpdateServiceRoleRequest {
    @SpeakeasyMetadata("form:name=Permission")
    public String[] permission;
    public UpdateServiceRoleUpdateServiceRoleRequest withPermission(String[] permission) {
        this.permission = permission;
        return this;
    }
}