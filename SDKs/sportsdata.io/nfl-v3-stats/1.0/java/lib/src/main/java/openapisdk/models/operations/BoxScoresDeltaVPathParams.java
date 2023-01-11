package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BoxScoresDeltaVPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public BoxScoresDeltaVFormatEnum format;
    public BoxScoresDeltaVPathParams withFormat(BoxScoresDeltaVFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minutes")
    public String minutes;
    public BoxScoresDeltaVPathParams withMinutes(String minutes) {
        this.minutes = minutes;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerstoinclude")
    public BoxScoresDeltaVPlayerstoincludeEnum playerstoinclude;
    public BoxScoresDeltaVPathParams withPlayerstoinclude(BoxScoresDeltaVPlayerstoincludeEnum playerstoinclude) {
        this.playerstoinclude = playerstoinclude;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public BoxScoresDeltaVPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public BoxScoresDeltaVPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}