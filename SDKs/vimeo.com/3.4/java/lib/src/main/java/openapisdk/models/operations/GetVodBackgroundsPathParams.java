package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodBackgroundsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodBackgroundsPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}