package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountUserProfilesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAccountUserProfilesPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}