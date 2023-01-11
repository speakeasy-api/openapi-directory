package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckIfVodWasPurchasedAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public CheckIfVodWasPurchasedAlt1PathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}