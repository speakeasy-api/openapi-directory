package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PermissionId")
    public String permissionId;
    public DeletePermissionPathParams withPermissionId(String permissionId) {
        this.permissionId = permissionId;
        return this;
    }
}