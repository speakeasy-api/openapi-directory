package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodRegionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodRegionsPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}