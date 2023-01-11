package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PermissionId")
    public String permissionId;
    public PutPermissionPathParams withPermissionId(String permissionId) {
        this.permissionId = permissionId;
        return this;
    }
}