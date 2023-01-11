package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhooksV3AppIdSettingsGetAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetWebhooksV3AppIdSettingsGetAllPathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}