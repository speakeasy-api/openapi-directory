package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LegacyBoxScoresDeltaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LegacyBoxScoresDeltaFormatEnum format;
    public LegacyBoxScoresDeltaPathParams withFormat(LegacyBoxScoresDeltaFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minutes")
    public String minutes;
    public LegacyBoxScoresDeltaPathParams withMinutes(String minutes) {
        this.minutes = minutes;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public LegacyBoxScoresDeltaPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public LegacyBoxScoresDeltaPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}