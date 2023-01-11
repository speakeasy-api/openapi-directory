package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStripeGatewayUserUserIdCardsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isDefault")
    public Boolean isDefault;
    public PostStripeGatewayUserUserIdCardsQueryParams withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public PostStripeGatewayUserUserIdCardsQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}