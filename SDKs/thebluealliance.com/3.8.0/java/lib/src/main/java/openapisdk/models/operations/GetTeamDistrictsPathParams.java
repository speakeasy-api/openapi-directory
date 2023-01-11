package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamDistrictsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamDistrictsPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}