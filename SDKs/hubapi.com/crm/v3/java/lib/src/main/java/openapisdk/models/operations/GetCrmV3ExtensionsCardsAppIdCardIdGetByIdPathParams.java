package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cardId")
    public String cardId;
    public GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams withCardId(String cardId) {
        this.cardId = cardId;
        return this;
    }
}