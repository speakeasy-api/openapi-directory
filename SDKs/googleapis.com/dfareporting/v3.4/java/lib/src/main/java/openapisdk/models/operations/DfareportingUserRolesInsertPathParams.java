package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingUserRolesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingUserRolesInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}