package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodGenresByOndemandIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodGenresByOndemandIdPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}