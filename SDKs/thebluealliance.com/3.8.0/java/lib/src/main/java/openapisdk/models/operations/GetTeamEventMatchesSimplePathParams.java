package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamEventMatchesSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetTeamEventMatchesSimplePathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamEventMatchesSimplePathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}