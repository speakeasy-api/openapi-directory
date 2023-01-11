package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertisersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAdvertisersPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}