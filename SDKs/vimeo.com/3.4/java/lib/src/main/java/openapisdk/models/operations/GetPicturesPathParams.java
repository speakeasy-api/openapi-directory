package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPicturesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetPicturesPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}