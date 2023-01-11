package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateLdapMappingForTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public EnterpriseAdminUpdateLdapMappingForTeamPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}