package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamYearsParticipatedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamYearsParticipatedPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}