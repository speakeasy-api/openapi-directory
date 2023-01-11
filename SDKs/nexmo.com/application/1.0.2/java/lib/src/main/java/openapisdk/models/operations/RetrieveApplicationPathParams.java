package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public RetrieveApplicationPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}