package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingUserProfilesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingUserProfilesGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}