package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVodBackgroundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public CreateVodBackgroundPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}