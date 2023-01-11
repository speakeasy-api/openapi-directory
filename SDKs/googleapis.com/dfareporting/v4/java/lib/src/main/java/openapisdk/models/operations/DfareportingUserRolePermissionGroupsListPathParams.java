package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingUserRolePermissionGroupsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingUserRolePermissionGroupsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}