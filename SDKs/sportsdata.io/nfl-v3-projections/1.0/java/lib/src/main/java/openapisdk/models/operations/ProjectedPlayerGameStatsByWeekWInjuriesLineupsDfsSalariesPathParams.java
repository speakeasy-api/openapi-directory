package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum format;
    public ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams withFormat(ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}