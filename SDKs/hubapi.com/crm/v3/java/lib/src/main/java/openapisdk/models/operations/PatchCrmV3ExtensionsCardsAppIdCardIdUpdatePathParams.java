package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cardId")
    public String cardId;
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams withCardId(String cardId) {
        this.cardId = cardId;
        return this;
    }
}