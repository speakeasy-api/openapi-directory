package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingUserRolePermissionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingUserRolePermissionsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}