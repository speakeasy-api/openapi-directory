package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountPermissionGroupsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAccountPermissionGroupsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}