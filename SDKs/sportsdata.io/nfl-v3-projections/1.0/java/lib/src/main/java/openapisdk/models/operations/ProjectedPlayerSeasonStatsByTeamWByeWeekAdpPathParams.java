package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum format;
    public ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams withFormat(ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
}