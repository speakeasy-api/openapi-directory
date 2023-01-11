package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum format;
    public IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams withFormat(IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}