package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetFeedPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}