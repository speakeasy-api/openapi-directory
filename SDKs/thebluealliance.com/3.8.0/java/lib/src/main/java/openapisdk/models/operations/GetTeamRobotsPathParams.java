package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamRobotsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamRobotsPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}