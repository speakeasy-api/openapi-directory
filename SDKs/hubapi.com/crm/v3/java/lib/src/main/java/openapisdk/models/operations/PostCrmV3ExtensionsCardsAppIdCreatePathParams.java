package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCrmV3ExtensionsCardsAppIdCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public PostCrmV3ExtensionsCardsAppIdCreatePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}