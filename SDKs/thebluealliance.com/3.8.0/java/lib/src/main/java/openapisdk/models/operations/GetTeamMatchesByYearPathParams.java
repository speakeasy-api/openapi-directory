package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamMatchesByYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamMatchesByYearPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetTeamMatchesByYearPathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}