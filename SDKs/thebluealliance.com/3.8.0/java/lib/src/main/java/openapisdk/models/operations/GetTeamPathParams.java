package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}