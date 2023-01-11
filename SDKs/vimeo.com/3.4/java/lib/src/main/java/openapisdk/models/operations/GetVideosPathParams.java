package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetVideosPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}