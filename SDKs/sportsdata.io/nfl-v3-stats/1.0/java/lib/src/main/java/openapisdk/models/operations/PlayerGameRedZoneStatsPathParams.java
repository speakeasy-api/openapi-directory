package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerGameRedZoneStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerGameRedZoneStatsFormatEnum format;
    public PlayerGameRedZoneStatsPathParams withFormat(PlayerGameRedZoneStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerGameRedZoneStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public PlayerGameRedZoneStatsPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}