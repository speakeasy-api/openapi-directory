package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FantasyDefenseGameStatsByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public FantasyDefenseGameStatsByTeamFormatEnum format;
    public FantasyDefenseGameStatsByTeamPathParams withFormat(FantasyDefenseGameStatsByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public FantasyDefenseGameStatsByTeamPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public FantasyDefenseGameStatsByTeamPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public FantasyDefenseGameStatsByTeamPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}