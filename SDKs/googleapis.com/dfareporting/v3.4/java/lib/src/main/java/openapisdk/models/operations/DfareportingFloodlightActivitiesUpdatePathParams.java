package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightActivitiesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingFloodlightActivitiesUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}