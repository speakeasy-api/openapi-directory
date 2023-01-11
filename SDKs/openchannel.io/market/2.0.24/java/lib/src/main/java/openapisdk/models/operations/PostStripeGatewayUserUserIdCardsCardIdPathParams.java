package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStripeGatewayUserUserIdCardsCardIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cardId")
    public String cardId;
    public PostStripeGatewayUserUserIdCardsCardIdPathParams withCardId(String cardId) {
        this.cardId = cardId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PostStripeGatewayUserUserIdCardsCardIdPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}