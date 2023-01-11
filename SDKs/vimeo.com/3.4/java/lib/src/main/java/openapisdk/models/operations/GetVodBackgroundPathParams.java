package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodBackgroundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=background_id")
    public Double backgroundId;
    public GetVodBackgroundPathParams withBackgroundId(Double backgroundId) {
        this.backgroundId = backgroundId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodBackgroundPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}