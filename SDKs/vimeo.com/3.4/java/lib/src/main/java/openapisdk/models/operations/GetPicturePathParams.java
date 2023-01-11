package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPicturePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portraitset_id")
    public Double portraitsetId;
    public GetPicturePathParams withPortraitsetId(Double portraitsetId) {
        this.portraitsetId = portraitsetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetPicturePathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}