package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserVodsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetUserVodsPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}