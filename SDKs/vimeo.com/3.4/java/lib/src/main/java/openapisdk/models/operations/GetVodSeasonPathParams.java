package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodSeasonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodSeasonPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season_id")
    public Double seasonId;
    public GetVodSeasonPathParams withSeasonId(Double seasonId) {
        this.seasonId = seasonId;
        return this;
    }
}