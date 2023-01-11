package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppearancesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetAppearancesPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}