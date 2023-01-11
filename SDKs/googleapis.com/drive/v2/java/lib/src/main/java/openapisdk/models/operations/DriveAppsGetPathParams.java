package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveAppsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public DriveAppsGetPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}