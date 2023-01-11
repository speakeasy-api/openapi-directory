package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerGameStatsByWeekDeltaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerGameStatsByWeekDeltaFormatEnum format;
    public PlayerGameStatsByWeekDeltaPathParams withFormat(PlayerGameStatsByWeekDeltaFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minutes")
    public String minutes;
    public PlayerGameStatsByWeekDeltaPathParams withMinutes(String minutes) {
        this.minutes = minutes;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerGameStatsByWeekDeltaPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public PlayerGameStatsByWeekDeltaPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}