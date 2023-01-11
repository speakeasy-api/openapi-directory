package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeagueLeadersBySeasonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=column")
    public LeagueLeadersBySeasonColumnEnum column;
    public LeagueLeadersBySeasonPathParams withColumn(LeagueLeadersBySeasonColumnEnum column) {
        this.column = column;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LeagueLeadersBySeasonFormatEnum format;
    public LeagueLeadersBySeasonPathParams withFormat(LeagueLeadersBySeasonFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=position")
    public LeagueLeadersBySeasonPositionEnum position;
    public LeagueLeadersBySeasonPathParams withPosition(LeagueLeadersBySeasonPositionEnum position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public LeagueLeadersBySeasonPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}