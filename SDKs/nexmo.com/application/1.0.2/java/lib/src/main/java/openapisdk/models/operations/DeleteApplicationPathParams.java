package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public DeleteApplicationPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}