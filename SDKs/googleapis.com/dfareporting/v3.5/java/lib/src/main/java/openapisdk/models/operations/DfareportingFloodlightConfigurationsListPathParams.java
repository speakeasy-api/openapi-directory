package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightConfigurationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingFloodlightConfigurationsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}