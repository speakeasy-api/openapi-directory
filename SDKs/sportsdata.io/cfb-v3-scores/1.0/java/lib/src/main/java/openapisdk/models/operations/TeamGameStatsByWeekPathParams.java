package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamGameStatsByWeekPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamGameStatsByWeekFormatEnum format;
    public TeamGameStatsByWeekPathParams withFormat(TeamGameStatsByWeekFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public TeamGameStatsByWeekPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public TeamGameStatsByWeekPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}