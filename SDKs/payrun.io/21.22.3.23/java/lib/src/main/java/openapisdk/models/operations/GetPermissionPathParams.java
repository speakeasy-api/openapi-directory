package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PermissionId")
    public String permissionId;
    public GetPermissionPathParams withPermissionId(String permissionId) {
        this.permissionId = permissionId;
        return this;
    }
}