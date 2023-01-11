package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdPublishPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public PostAppsAppIdPublishPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}