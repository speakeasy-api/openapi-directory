package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum format;
    public ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams withFormat(ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}