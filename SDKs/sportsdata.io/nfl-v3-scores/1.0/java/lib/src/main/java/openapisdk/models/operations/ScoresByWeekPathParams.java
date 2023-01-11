package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScoresByWeekPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ScoresByWeekFormatEnum format;
    public ScoresByWeekPathParams withFormat(ScoresByWeekFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ScoresByWeekPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public ScoresByWeekPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}