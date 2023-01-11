package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPermissionAppsAppIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GetPermissionAppsAppIdPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}