package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditVodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public EditVodPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}