package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodLikesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodLikesPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}