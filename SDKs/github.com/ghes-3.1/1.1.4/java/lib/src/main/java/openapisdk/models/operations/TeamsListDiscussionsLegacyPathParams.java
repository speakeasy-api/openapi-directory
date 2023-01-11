package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListDiscussionsLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListDiscussionsLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}