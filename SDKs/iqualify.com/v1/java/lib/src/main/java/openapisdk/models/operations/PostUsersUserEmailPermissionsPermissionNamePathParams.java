package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserEmailPermissionsPermissionNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permissionName")
    public openapisdk.models.shared.PermissionNameEnum permissionName;
    public PostUsersUserEmailPermissionsPermissionNamePathParams withPermissionName(openapisdk.models.shared.PermissionNameEnum permissionName) {
        this.permissionName = permissionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public PostUsersUserEmailPermissionsPermissionNamePathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}