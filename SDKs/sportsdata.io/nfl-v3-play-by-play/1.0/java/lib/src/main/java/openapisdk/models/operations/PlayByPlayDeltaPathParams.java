package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayByPlayDeltaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayByPlayDeltaFormatEnum format;
    public PlayByPlayDeltaPathParams withFormat(PlayByPlayDeltaFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minutes")
    public String minutes;
    public PlayByPlayDeltaPathParams withMinutes(String minutes) {
        this.minutes = minutes;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayByPlayDeltaPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public PlayByPlayDeltaPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}