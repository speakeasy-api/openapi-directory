package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfsSlatesByWeekPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public DfsSlatesByWeekFormatEnum format;
    public DfsSlatesByWeekPathParams withFormat(DfsSlatesByWeekFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public DfsSlatesByWeekPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public DfsSlatesByWeekPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}