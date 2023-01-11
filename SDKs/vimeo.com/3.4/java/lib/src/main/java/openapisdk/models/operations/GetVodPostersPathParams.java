package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodPostersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodPostersPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}