package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodSeasonVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodSeasonVideosPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season_id")
    public Double seasonId;
    public GetVodSeasonVideosPathParams withSeasonId(Double seasonId) {
        this.seasonId = seasonId;
        return this;
    }
}