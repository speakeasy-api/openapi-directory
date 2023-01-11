package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlbumsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetAlbumsPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}