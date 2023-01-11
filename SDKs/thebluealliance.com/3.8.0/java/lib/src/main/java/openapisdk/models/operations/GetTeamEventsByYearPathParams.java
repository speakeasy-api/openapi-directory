package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamEventsByYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamEventsByYearPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetTeamEventsByYearPathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}