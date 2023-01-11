package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebhooksV3AppIdSettingsClearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public DeleteWebhooksV3AppIdSettingsClearPathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}