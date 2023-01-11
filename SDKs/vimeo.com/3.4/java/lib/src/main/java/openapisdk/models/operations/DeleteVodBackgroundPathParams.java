package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVodBackgroundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=background_id")
    public Double backgroundId;
    public DeleteVodBackgroundPathParams withBackgroundId(Double backgroundId) {
        this.backgroundId = backgroundId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public DeleteVodBackgroundPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}