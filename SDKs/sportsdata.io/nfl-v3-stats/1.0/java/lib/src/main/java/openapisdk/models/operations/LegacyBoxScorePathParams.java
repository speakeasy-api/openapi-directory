package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LegacyBoxScorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LegacyBoxScoreFormatEnum format;
    public LegacyBoxScorePathParams withFormat(LegacyBoxScoreFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hometeam")
    public String hometeam;
    public LegacyBoxScorePathParams withHometeam(String hometeam) {
        this.hometeam = hometeam;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public LegacyBoxScorePathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public LegacyBoxScorePathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}