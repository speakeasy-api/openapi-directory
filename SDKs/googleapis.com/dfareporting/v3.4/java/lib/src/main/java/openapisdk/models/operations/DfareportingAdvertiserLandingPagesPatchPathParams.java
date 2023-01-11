package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertiserLandingPagesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAdvertiserLandingPagesPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}