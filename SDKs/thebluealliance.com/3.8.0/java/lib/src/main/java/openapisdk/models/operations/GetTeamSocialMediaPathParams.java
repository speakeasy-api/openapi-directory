package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamSocialMediaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamSocialMediaPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}