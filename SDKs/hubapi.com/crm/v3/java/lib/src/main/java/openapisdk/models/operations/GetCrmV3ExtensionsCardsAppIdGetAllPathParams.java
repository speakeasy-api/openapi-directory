package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrmV3ExtensionsCardsAppIdGetAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetCrmV3ExtensionsCardsAppIdGetAllPathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}