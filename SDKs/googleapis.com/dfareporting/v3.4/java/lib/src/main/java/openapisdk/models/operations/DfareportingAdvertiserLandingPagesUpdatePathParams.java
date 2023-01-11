package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertiserLandingPagesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAdvertiserLandingPagesUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}