package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InjuriesByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public InjuriesByTeamFormatEnum format;
    public InjuriesByTeamPathParams withFormat(InjuriesByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public InjuriesByTeamPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public InjuriesByTeamPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public InjuriesByTeamPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}