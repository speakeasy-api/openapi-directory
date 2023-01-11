package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppsAppIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public DeleteAppsAppIdPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}