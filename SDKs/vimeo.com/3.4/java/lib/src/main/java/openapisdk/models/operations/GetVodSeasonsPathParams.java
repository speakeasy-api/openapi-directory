package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodSeasonsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodSeasonsPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}