package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public CreateVodPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}