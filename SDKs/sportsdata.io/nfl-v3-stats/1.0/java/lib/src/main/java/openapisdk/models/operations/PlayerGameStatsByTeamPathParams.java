package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerGameStatsByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerGameStatsByTeamFormatEnum format;
    public PlayerGameStatsByTeamPathParams withFormat(PlayerGameStatsByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerGameStatsByTeamPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public PlayerGameStatsByTeamPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public PlayerGameStatsByTeamPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}