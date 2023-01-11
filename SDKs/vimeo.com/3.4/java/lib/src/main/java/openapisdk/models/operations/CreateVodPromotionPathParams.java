package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVodPromotionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public CreateVodPromotionPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}