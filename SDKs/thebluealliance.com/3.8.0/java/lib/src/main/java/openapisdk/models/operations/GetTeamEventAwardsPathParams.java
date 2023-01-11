package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamEventAwardsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetTeamEventAwardsPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamEventAwardsPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}