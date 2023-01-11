package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum format;
    public ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams withFormat(ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}