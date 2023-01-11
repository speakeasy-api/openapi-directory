package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStripeGatewayUserUserIdCardsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public GetStripeGatewayUserUserIdCardsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}