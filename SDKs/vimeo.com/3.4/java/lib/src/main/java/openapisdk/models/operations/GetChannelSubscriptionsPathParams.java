package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelSubscriptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetChannelSubscriptionsPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}