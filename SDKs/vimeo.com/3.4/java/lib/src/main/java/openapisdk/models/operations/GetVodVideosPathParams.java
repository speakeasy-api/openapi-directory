package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodVideosPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}