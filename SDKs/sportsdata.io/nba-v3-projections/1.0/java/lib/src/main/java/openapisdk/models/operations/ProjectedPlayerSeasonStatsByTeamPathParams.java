package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerSeasonStatsByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerSeasonStatsByTeamFormatEnum format;
    public ProjectedPlayerSeasonStatsByTeamPathParams withFormat(ProjectedPlayerSeasonStatsByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedPlayerSeasonStatsByTeamPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public ProjectedPlayerSeasonStatsByTeamPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
}