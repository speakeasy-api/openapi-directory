package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightActivitiesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingFloodlightActivitiesInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}