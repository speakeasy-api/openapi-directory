package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountUserProfilesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAccountUserProfilesInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}