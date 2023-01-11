package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamEventMatchesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetTeamEventMatchesPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamEventMatchesPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}