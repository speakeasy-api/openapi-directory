package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePermissionAppsAppIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public DeletePermissionAppsAppIdPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}