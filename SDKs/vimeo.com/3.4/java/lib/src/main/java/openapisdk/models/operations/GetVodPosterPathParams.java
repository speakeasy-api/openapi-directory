package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodPosterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodPosterPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poster_id")
    public Double posterId;
    public GetVodPosterPathParams withPosterId(Double posterId) {
        this.posterId = posterId;
        return this;
    }
}