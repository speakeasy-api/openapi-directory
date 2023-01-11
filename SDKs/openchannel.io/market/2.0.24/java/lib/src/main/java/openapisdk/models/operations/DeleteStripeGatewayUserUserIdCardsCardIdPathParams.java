package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStripeGatewayUserUserIdCardsCardIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cardId")
    public String cardId;
    public DeleteStripeGatewayUserUserIdCardsCardIdPathParams withCardId(String cardId) {
        this.cardId = cardId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteStripeGatewayUserUserIdCardsCardIdPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}