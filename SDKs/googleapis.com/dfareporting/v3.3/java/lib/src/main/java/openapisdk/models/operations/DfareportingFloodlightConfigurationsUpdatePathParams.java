package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightConfigurationsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingFloodlightConfigurationsUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}