package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamEventsKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamEventsKeysPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}