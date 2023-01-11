package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeagueLeadersByWeekPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=column")
    public LeagueLeadersByWeekColumnEnum column;
    public LeagueLeadersByWeekPathParams withColumn(LeagueLeadersByWeekColumnEnum column) {
        this.column = column;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LeagueLeadersByWeekFormatEnum format;
    public LeagueLeadersByWeekPathParams withFormat(LeagueLeadersByWeekFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=position")
    public LeagueLeadersByWeekPositionEnum position;
    public LeagueLeadersByWeekPathParams withPosition(LeagueLeadersByWeekPositionEnum position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public LeagueLeadersByWeekPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public LeagueLeadersByWeekPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}