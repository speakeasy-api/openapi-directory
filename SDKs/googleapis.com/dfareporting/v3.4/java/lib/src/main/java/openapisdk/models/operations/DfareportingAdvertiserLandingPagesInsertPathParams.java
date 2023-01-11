package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertiserLandingPagesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAdvertiserLandingPagesInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}