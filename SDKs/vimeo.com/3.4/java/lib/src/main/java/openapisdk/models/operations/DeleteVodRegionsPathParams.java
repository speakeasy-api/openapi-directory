package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVodRegionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public DeleteVodRegionsPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}