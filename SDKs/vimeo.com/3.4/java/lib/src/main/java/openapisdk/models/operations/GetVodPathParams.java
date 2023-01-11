package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}