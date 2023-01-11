package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BoxScoreVPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public BoxScoreVFormatEnum format;
    public BoxScoreVPathParams withFormat(BoxScoreVFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hometeam")
    public String hometeam;
    public BoxScoreVPathParams withHometeam(String hometeam) {
        this.hometeam = hometeam;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public BoxScoreVPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public BoxScoreVPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}