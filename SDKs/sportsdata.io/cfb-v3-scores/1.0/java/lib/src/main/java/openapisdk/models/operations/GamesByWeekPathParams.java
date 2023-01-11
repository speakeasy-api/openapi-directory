package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesByWeekPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GamesByWeekFormatEnum format;
    public GamesByWeekPathParams withFormat(GamesByWeekFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public GamesByWeekPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public GamesByWeekPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}