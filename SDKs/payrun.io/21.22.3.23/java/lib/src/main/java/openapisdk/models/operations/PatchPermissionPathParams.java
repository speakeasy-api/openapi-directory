package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PermissionId")
    public String permissionId;
    public PatchPermissionPathParams withPermissionId(String permissionId) {
        this.permissionId = permissionId;
        return this;
    }
}