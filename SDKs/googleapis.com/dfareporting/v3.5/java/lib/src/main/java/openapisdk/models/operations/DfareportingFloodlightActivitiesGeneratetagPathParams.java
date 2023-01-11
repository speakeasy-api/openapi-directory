package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightActivitiesGeneratetagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingFloodlightActivitiesGeneratetagPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}