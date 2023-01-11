package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InjuriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public InjuriesFormatEnum format;
    public InjuriesPathParams withFormat(InjuriesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public InjuriesPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public InjuriesPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}