package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamEventsByYearSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamEventsByYearSimplePathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetTeamEventsByYearSimplePathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}