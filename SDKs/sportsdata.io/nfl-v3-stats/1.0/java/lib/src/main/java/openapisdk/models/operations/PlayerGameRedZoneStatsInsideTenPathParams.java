package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerGameRedZoneStatsInsideTenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerGameRedZoneStatsInsideTenFormatEnum format;
    public PlayerGameRedZoneStatsInsideTenPathParams withFormat(PlayerGameRedZoneStatsInsideTenFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerGameRedZoneStatsInsideTenPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public PlayerGameRedZoneStatsInsideTenPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}