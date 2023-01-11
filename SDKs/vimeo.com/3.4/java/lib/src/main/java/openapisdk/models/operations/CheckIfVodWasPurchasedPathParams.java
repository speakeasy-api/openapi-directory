package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckIfVodWasPurchasedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public CheckIfVodWasPurchasedPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}