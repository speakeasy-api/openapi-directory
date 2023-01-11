package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LegacyBoxScoresPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LegacyBoxScoresFormatEnum format;
    public LegacyBoxScoresPathParams withFormat(LegacyBoxScoresFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public LegacyBoxScoresPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public LegacyBoxScoresPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}