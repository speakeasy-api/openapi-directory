package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodPromotionCodesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodPromotionCodesPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=promotion_id")
    public Double promotionId;
    public GetVodPromotionCodesPathParams withPromotionId(Double promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}