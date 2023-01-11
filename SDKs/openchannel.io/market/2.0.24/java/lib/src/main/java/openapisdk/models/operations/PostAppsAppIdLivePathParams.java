package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdLivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public PostAppsAppIdLivePathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}