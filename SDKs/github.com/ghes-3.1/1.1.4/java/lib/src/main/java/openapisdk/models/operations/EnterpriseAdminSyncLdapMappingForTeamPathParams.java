package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminSyncLdapMappingForTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public EnterpriseAdminSyncLdapMappingForTeamPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}