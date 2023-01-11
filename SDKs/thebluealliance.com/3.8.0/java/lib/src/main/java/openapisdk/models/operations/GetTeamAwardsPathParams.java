package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamAwardsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamAwardsPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}