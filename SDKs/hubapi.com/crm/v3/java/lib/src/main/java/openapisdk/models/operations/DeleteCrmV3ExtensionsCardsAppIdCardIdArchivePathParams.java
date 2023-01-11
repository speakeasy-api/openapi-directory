package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cardId")
    public String cardId;
    public DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams withCardId(String cardId) {
        this.cardId = cardId;
        return this;
    }
}