package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public UpdateApplicationPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}