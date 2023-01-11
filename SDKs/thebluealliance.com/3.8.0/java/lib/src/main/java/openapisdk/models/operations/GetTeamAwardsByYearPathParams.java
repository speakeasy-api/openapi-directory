package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamAwardsByYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamAwardsByYearPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetTeamAwardsByYearPathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}