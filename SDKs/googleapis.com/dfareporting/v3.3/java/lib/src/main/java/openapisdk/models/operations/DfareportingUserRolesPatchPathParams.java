package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingUserRolesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingUserRolesPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}