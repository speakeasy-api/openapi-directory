package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWebhooksV3AppIdSettingsConfigurePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public PutWebhooksV3AppIdSettingsConfigurePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}