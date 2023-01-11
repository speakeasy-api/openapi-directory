package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomationV4ActionsAppIdGetPagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetAutomationV4ActionsAppIdGetPagePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}