package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayByPlayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayByPlayFormatEnum format;
    public PlayByPlayPathParams withFormat(PlayByPlayFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hometeam")
    public String hometeam;
    public PlayByPlayPathParams withHometeam(String hometeam) {
        this.hometeam = hometeam;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayByPlayPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public PlayByPlayPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}