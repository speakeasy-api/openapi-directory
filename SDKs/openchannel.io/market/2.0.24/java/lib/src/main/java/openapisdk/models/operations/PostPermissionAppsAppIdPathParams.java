package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPermissionAppsAppIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public PostPermissionAppsAppIdPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}