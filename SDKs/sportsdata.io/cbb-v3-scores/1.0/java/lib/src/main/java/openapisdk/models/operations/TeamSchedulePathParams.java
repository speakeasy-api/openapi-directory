package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamScheduleFormatEnum format;
    public TeamSchedulePathParams withFormat(TeamScheduleFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public TeamSchedulePathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public TeamSchedulePathParams withTeam(String team) {
        this.team = team;
        return this;
    }
}