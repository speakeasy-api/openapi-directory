package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountUserProfilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAccountUserProfilesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}