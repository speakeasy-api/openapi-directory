package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamEventsSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamEventsSimplePathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}