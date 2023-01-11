package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditVodBackgroundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=background_id")
    public Double backgroundId;
    public EditVodBackgroundPathParams withBackgroundId(Double backgroundId) {
        this.backgroundId = backgroundId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public EditVodBackgroundPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}