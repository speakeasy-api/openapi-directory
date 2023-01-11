package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FantasyDefenseSeasonStatsByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public FantasyDefenseSeasonStatsByTeamFormatEnum format;
    public FantasyDefenseSeasonStatsByTeamPathParams withFormat(FantasyDefenseSeasonStatsByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public FantasyDefenseSeasonStatsByTeamPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public FantasyDefenseSeasonStatsByTeamPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
}