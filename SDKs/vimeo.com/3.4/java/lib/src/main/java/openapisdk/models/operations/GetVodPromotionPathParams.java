package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodPromotionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodPromotionPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=promotion_id")
    public Double promotionId;
    public GetVodPromotionPathParams withPromotionId(Double promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}