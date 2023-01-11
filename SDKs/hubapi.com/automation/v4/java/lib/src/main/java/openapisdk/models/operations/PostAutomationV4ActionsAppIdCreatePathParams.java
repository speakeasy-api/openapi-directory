package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAutomationV4ActionsAppIdCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public PostAutomationV4ActionsAppIdCreatePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}