package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamSimplePathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}