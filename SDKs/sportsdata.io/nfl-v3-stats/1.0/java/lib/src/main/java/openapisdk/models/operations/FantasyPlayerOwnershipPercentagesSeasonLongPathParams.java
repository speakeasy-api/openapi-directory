package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FantasyPlayerOwnershipPercentagesSeasonLongPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum format;
    public FantasyPlayerOwnershipPercentagesSeasonLongPathParams withFormat(FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public FantasyPlayerOwnershipPercentagesSeasonLongPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public FantasyPlayerOwnershipPercentagesSeasonLongPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}