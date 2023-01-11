package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStripeGatewayUserUserIdCardsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PostStripeGatewayUserUserIdCardsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}