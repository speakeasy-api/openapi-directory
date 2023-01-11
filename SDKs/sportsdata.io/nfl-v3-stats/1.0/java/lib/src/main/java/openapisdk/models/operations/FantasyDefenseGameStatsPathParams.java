package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FantasyDefenseGameStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public FantasyDefenseGameStatsFormatEnum format;
    public FantasyDefenseGameStatsPathParams withFormat(FantasyDefenseGameStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public FantasyDefenseGameStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public FantasyDefenseGameStatsPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}