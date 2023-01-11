package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum format;
    public IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams withFormat(IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}