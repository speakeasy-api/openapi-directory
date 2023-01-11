package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerGameRedZoneStatsInsideFivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerGameRedZoneStatsInsideFiveFormatEnum format;
    public PlayerGameRedZoneStatsInsideFivePathParams withFormat(PlayerGameRedZoneStatsInsideFiveFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerGameRedZoneStatsInsideFivePathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public PlayerGameRedZoneStatsInsideFivePathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}